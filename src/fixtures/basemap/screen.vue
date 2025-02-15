<template>
    <panel-screen :panel="panel">
        <template #header>
            {{ $t('basemap.title') }}
        </template>

        <template #content>
            <div class="h-600 overflow-y-auto">
                <div
                    class="mx-5"
                    v-for="(tileSchema, idx) in tileSchemas"
                    :key="tileSchema.id"
                >
                    <!-- use mt-5 if it's the first basemap title schema, use mt-36 otherwise -->
                    <div :class="(idx === 0 ? 'mt-5' : 'mt-36') + ' flex mb-5'">
                        <h3 class="font-bold text-xl" v-truncate>
                            {{ tileSchema.name }}
                        </h3>
                    </div>

                    <ul
                        class="border-t border-b border-gray-600"
                        v-focus-list
                        v-if="basemaps.length > 0"
                    >
                        <li
                            v-for="basemap in filterBasemaps(tileSchema.id)"
                            :key="basemap.id"
                        >
                            <basemap-item
                                :basemap="basemap"
                                :tileSchema="tileSchema"
                                class="block relative overflow-hidden"
                            ></basemap-item>
                        </li>
                    </ul>
                </div>
            </div>
        </template>
    </panel-screen>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

import BasemapItemV from './item.vue';
import type {
    RampBasemapConfig,
    RampMapConfig,
    RampTileSchemaConfig
} from '@/geo/api';
import type { PanelInstance } from '@/api';
import { ConfigStore } from '@/store/modules/config';

export default defineComponent({
    name: 'BasemapScreenV',
    props: {
        panel: {
            type: Object as PropType<PanelInstance>
        }
    },
    components: {
        'basemap-item': BasemapItemV
    },
    data() {
        return {
            tileSchemas: [] as Array<RampTileSchemaConfig>,
            basemaps: [] as Array<RampBasemapConfig>,
            selectedBasemap: this.get(ConfigStore.getActiveBasemapConfig)
        };
    },
    mounted() {
        const mapConfig: RampMapConfig = this.$iApi.$vApp.$store.get(
            ConfigStore.getMapConfig
        )! as RampMapConfig;
        this.tileSchemas = mapConfig.tileSchemas;
        this.basemaps = mapConfig.basemaps;
    },
    methods: {
        filterBasemaps(schemaId: string) {
            // filter out all the basemaps that match the current schema
            return this.basemaps.filter(
                (basemap: RampBasemapConfig) =>
                    basemap.tileSchemaId === schemaId
            );
        }
    }
});
</script>

<style lang="scss" scoped></style>
