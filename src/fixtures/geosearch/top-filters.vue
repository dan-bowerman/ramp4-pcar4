<template>
    <div class="rv-geosearch-top-filters flex w-full mx-8">
        <div class="inline-block w-2/5 h-40">
            <select
                class="form-select border-b border-b-gray-600 w-full h-auto py-0 cursor-pointer"
                :value="queryParams.province"
                v-on:change="setProvince($event.target.value)"
            >
                <option value="" disabled hidden>
                    {{ $t('geosearch.filters.province') }}
                </option>
                <option
                    v-for="province in provinces"
                    v-bind:key="province.code"
                >
                    {{ province.name }}
                </option>
            </select>
        </div>
        <div class="inline-block w-2/5 h-40 mx-16">
            <select
                class="form-select border-b border-b-gray-600 w-full h-auto py-0 cursor-pointer"
                :value="queryParams.type"
                v-on:change="setType($event.target.value)"
            >
                <option value="" disabled hidden>
                    {{ $t('geosearch.filters.type') }}
                </option>
                <option v-for="type in types" v-bind:key="type.code">
                    {{ type.name }}
                </option>
            </select>
        </div>
        <button
            class="inline-block flex text-gray-400 w-1/8 hover:text-black float-right disabled:cursor-default disabled:text-gray-400"
            :disabled="!queryParams.type && !queryParams.province"
            v-on:click="clearFilters"
            :content="$t('geosearch.filters.clear')"
            v-tippy="{ placement: 'bottom' }"
        >
            <div class="rv-geosearch-icon">
                <svg class="fill-current w-18 h-18 mr-16" viewBox="0 0 23 21">
                    <path
                        d="M 14.7574,20.8284L 17.6036,17.9822L 14.7574,15.1716L 16.1716,13.7574L 19.0178,16.568L 21.8284,13.7574L 23.2426,15.1716L 20.432,17.9822L 23.2426,20.8284L 21.8284,22.2426L 19.0178,19.3964L 16.1716,22.2426L 14.7574,20.8284 Z M 2,2L 19.9888,2.00001L 20,2.00001L 20,2.01122L 20,3.99999L 19.9207,3.99999L 13,10.9207L 13,22.909L 8.99999,18.909L 8.99999,10.906L 2.09405,3.99999L 2,3.99999L 2,2 Z "
                    />
                </svg>
            </div>
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { GeosearchStore } from './store';

export default defineComponent({
    name: 'GeosearchTopFiltersV',

    // fetch defined province/type filters + filter params from store
    data() {
        return {
            provinces: this.get(GeosearchStore.getProvinces),
            types: this.get(GeosearchStore.getTypes),
            queryParams: this.get(GeosearchStore.queryParams),
            setProvince: this.call(GeosearchStore.setProvince),
            setType: this.call(GeosearchStore.setType)
        };
    },
    methods: {
        // Called when the `clear filters` button is clicked. Clears province and type filters.
        clearFilters(): void {
            this.setProvince(undefined);
            this.setType(undefined);
        }
    }
});
</script>

<style lang="scss" scoped></style>
