<template>
    <div class="h-full flex items-center justify-center w-full">
        <input
            class="m-0 py-1 w-1/2 rv-input bg-white text-black-75 h-24 py-16 px-8 border-2 rounded"
            type="date"
            placeholder="date min"
            v-model="minVal"
            @change="minValChanged()"
        />
        <span class="w-12" />
        <input
            class="m-0 py-1 w-1/2 rv-input bg-white text-black-75 h-24 py-16 px-8 border-2 rounded"
            type="date"
            placeholder="date max"
            v-model="maxVal"
            @change="maxValChanged()"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'GridCustomDateFilterV',
    props: ['params'],
    data() {
        return {
            minVal: '' as any,
            maxVal: '' as any
        };
    },

    beforeMount() {
        // Load previously stored values (if saved in table state manager)
        this.minVal =
            this.params.stateManager.getColumnFilter(
                this.params.column.colDef.field + ' min'
            ) || '';
        this.maxVal =
            this.params.stateManager.getColumnFilter(
                this.params.column.colDef.field + ' max'
            ) || '';
        // Apply the default values to the column filter.
        this.minValChanged();
        this.maxValChanged();
    },

    methods: {
        minValChanged() {
            this.params.parentFilterInstance((instance: any) => {
                this.setFilterModel(instance);
                // Save the new filter value in the state manager. Allows for quick recovery if the grid is
                // closed and re-opened.
                this.params.stateManager.setColumnFilter(
                    this.params.column.colDef.field + ' min',
                    this.minVal
                );
            });
        },

        maxValChanged() {
            this.params.parentFilterInstance((instance: any) => {
                this.setFilterModel(instance);
                // Save the new filter value in the state manager. Allows for quick recovery if the grid is
                // closed and re-opened.
                this.params.stateManager.setColumnFilter(
                    this.params.column.colDef.field + ' max',
                    this.maxVal
                );
            });
        },

        setFilterModel(instance: any) {
            // This is the furthest date supported by JavaScript.
            let maxPossibleDate: Date | string = new Date(8640000000000000);
            maxPossibleDate = `${maxPossibleDate.getFullYear()}-${
                maxPossibleDate.getMonth() + 1
            }-${maxPossibleDate.getDate()}`;
            // This is the earliest date supported by JavaScript.
            let minPossibleDate: Date | string = new Date(0);
            minPossibleDate = `${minPossibleDate.getFullYear()}-${
                minPossibleDate.getMonth() + 1
            }-${minPossibleDate.getDate()}`;
            if (this.maxVal === '' && this.minVal === '') {
                // If neither value is set, clear the date filter.
                instance.setModel(null);
            } else if (this.maxVal !== '' && this.minVal !== '') {
                // If both values are set, display all items that occur between the two dates.
                instance.setModel({
                    filterType: 'date',
                    type: 'inRange',
                    dateFrom: this.minVal,
                    dateTo: this.maxVal
                });
            } else if (this.minVal === '') {
                // If only the maximum value is set, display all dates that occur before it.
                instance.setModel({
                    filterType: 'date',
                    type: 'inRange',
                    dateFrom: minPossibleDate,
                    dateTo: this.maxVal
                });
            } else if (this.maxVal === '') {
                // If only the minimum value is set, display all dates that occur after it.
                instance.setModel({
                    filterType: 'date',
                    type: 'inRange',
                    dateFrom: this.minVal,
                    dateTo: maxPossibleDate
                });
            }
            this.params.api.onFilterChanged();
        },

        onParentModelChanged(parentModel: any) {
            if (parentModel === {}) {
                this.minVal = '';
                this.maxVal = '';
            }
        },

        setModel() {
            return {
                filterType: 'date',
                type: 'inRange',
                filter: this.minVal,
                filterTo: this.maxVal
            };
        }
    }
});

export interface GridCustomDateFilter {
    minVal: any;
    maxVal: any;
    colDef: any;
    params: any;
}
</script>

<style lang="scss" scoped>
.ag-floating-filter-full-body input,
.ag-floating-filter-full-body select,
.rv-global-search {
    @apply bg-transparent text-black-75 h-24 pb-8 border-0 border-b-2;
}
.rv-input {
    @apply m-0 py-1;
}
</style>
<style lang="scss">
.rv-input[type='date']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
}

.rv-input[type='date']::-webkit-calendar-picker-indicator {
    margin: 0;
}
</style>
