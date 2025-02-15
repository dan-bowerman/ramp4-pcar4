<template>
    <div class="relative legend-header flex">
        <!-- open import wizard -->
        <button
            @click="openWizard"
            class="relative mr-auto text-gray-500 hover:text-black mb-3"
            v-show="getWizardExists() && isControlAvailable('wizard')"
            :content="$t('legend.header.addlayer')"
            v-tippy="{ placement: 'right' }"
        >
            <svg class="fill-current w-18 h-18 mx-8" viewBox="0 0 23 21">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
            </svg>
        </button>
        <!-- open layer reorder -->
        <button
            @click="openLayerReorder"
            class="relative mr-auto text-gray-500 hover:text-black p-8 mb-3"
            v-show="
                getLayerReorderExists() && isControlAvailable('layerReorder')
            "
            :content="$t('legend.header.reorderlayers')"
            v-tippy="{ placement: 'right' }"
        >
            <svg
                class="fill-current w-18 h-18 mx-8 mt-4 flip"
                viewBox="0 0 23 21"
            >
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                    d="M14 5h8v2h-8zm0 5.5h8v2h-8zm0 5.5h8v2h-8zM2 11.5C2 15.08 4.92 18 8.5 18H9v2l3-3-3-3v2h-.5C6.02 16 4 13.98 4 11.5S6.02 7 8.5 7H12V5H8.5C4.92 5 2 7.92 2 11.5z"
                />
            </svg>
        </button>
        <span class="flex-1"></span>
        <!-- groups toggle -->
        <dropdown-menu
            class="relative"
            position="left-start"
            :tooltip="$t('legend.header.groups')"
            tooltip-placement="left"
            v-show="isControlAvailable('groupToggle')"
        >
            <template #header>
                <div class="p-8">
                    <svg
                        class="fill-current w-18 h-18 mx-8"
                        viewBox="0 0 23 21"
                    >
                        <path
                            d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
                        />
                    </svg>
                </div>
            </template>
            <a
                href="#"
                class="flex leading-snug items-center overflow-hidden whitespace-nowrap"
                @click="expand"
            >
                {{ $t('legend.header.groups.expand') }}
            </a>
            <a
                href="#"
                class="flex leading-snug items-center overflow-hidden whitespace-nowrap"
                @click="collapse"
            >
                {{ $t('legend.header.groups.collapse') }}
            </a>
        </dropdown-menu>
        <!-- visibility toggle -->
        <dropdown-menu
            class="relative"
            position="left-start"
            :tooltip="$t('legend.header.visible')"
            tooltip-placement="left"
            v-show="isControlAvailable('visibilityToggle')"
        >
            <template #header>
                <div class="flex p-8">
                    <svg class="fill-current w-18 h-18" viewBox="0 0 23 21">
                        <path
                            d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
                        />
                    </svg>
                </div>
            </template>
            <a
                href="#"
                class="flex leading-snug items-center w-100 overflow-hidden whitespace-nowrap"
                @click="show"
            >
                {{ $t('legend.header.visible.show') }}
            </a>
            <a
                href="#"
                class="flex leading-snug items-center w-100 overflow-hidden whitespace-nowrap"
                @click="hide"
            >
                {{ $t('legend.header.visible.hide') }}
            </a>
        </dropdown-menu>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { LegendStore } from './store';
import { GlobalEvents } from '../../api/internal';

export default defineComponent({
    name: 'LegendHeaderV',
    data() {
        return {
            show: this.call(LegendStore.showAll),
            hide: this.call(LegendStore.hideAll),
            expand: this.call(LegendStore.expandGroups),
            collapse: this.call(LegendStore.collapseGroups)
        };
    },
    methods: {
        openWizard() {
            this.$iApi.event.emit(GlobalEvents.WIZARD_OPEN);
        },
        getWizardExists(): boolean {
            try {
                return !!this.$iApi.fixture.get('wizard');
            } catch (e) {
                return false;
            }
        },
        openLayerReorder() {
            this.$iApi.event.emit(GlobalEvents.REORDER_OPEN);
        },
        getLayerReorderExists(): boolean {
            try {
                return !!this.$iApi.fixture.get('layer-reorder');
            } catch (e) {
                return false;
            }
        },
        isControlAvailable(control: string): boolean {
            const hc: Array<string> | undefined = this.$store.get(
                LegendStore.headerControls
            );
            return hc!.includes(control);
        }
    }
});
</script>

<style lang="scss" scoped>
.flip {
    transform: scale(1, -1);
}
</style>
