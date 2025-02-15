<template>
    <div class="rv-geosearch-bottom-filters">
        <div class="bg-white">
            <label class="ml-8 cursor-pointer"
                ><input
                    type="checkbox"
                    class="form-checkbox border-2 mx-8 border-gray-600 cursor-pointer"
                    :checked="resultsVisible"
                    @change="updateMapExtent($event.target.checked)"
                />{{ $t('geosearch.visible') }}</label
            >
        </div>
    </div>
</template>

<script lang="ts">
import { GlobalEvents } from '@/api/internal';
import type { Extent } from '@/geo/api';
import { GeosearchStore } from './store';
import { debounce } from 'throttle-debounce';

import { defineComponent } from 'vue';

export default defineComponent({
    name: 'GeosearchBottomFiltersV',
    data() {
        return {
            resultsVisible: this.get(GeosearchStore.resultsVisible),

            setMapExtent: this.call(GeosearchStore.setMapExtent),

            // Called when the map extent is changed. Updates geosearch data to display accurate results.
            onMapExtentChange: debounce(300, (newExtent: Extent) => {
                this.latLongExtent(newExtent).then((e: Extent) => {
                    this.setMapExtent({
                        extent: e,
                        visible: this.resultsVisible
                    });
                });
            })
        };
    },

    mounted() {
        // TODO decide if this event handler should go into the default ramp events, or remain as hard-bound to geosearch.
        //      hard-bound means no one outside can un-hook and replace with a different reaction.
        //      going default means the handler function needs to be public / on the geosearch api.
        //      ^ not entirely true. a person can still unhook the event, however our public documentation will
        //        have no mention of the event handler name. A person would need to discover it.
        this.$iApi.event.on(
            GlobalEvents.MAP_EXTENTCHANGE,
            this.onMapExtentChange,
            'geosearch_map_extent'
        );
    },

    /**
     * This is called while the component is still functional right before everything is removed.
     */
    beforeUnmount() {
        this.$iApi.event.off('geosearch_map_extent');
    },

    methods: {
        // Computes the extent information.
        async latLongExtent(ext: Extent): Promise<Extent> {
            if (ext.sr.wkid === 4326) {
                return ext;
            } else {
                // var needed to get around casting complaints with async syntax
                const pExt = await this.$iApi.geo.proj.projectGeometry(
                    4326,
                    ext
                );
                return pExt as Extent;
            }
        },

        // Called when the checkbox is pressed. Updates the geosearch extent.
        updateMapExtent(visible: boolean): void {
            this.latLongExtent(this.$iApi.geo.map.getExtent()).then(e => {
                this.setMapExtent({
                    extent: e,
                    visible: visible
                });
            });
        }
    }
});
</script>

<style></style>
