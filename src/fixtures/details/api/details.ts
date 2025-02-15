import { FixtureInstance } from '@/api';
import type { IdentifyResult } from '@/geo/api';
import { DetailsItemInstance, DetailsStore } from '../store';

import type {
    DetailsConfig,
    DetailsConfigItem,
    DetailsItemSet
} from '../store';

export class DetailsAPI extends FixtureInstance {
    get config(): DetailsConfig | undefined {
        return super.config;
    }

    /**
     * Updates the identify result in the store, and then opens the details panel.
     *
     * @param {IdentifyResult[]} payload
     * @memberof DetailsAPI
     */
    openDetails(payload: IdentifyResult[]): void {
        // Save the provided identify result in the store.
        this.$vApp.$store.set(DetailsStore.setPayload, payload);

        // Open the details panel.
        const layersPanel = this.$iApi.panel.get('details-layers');
        if (!layersPanel.isOpen) {
            this.$iApi.panel.open({
                id: 'details-layers'
            });
        }
    }

    /**
     * Provided with the data for a single feature, open the details panel directly to the feature screen.
     *
     * @param {{data: any, uid: string, format: string}} featureData
     * @memberof DetailsAPI
     */
    openFeature(featureData: { data: any; uid: string; format: string }): void {
        // Close the identified layers panel.
        const panel = this.$iApi.panel.get('details-layers');
        if (panel.isOpen) {
            this.$iApi.panel.close(panel);
        }

        // Open or update the items panel
        let itemsPanel = this.$iApi.panel.get('details-items');
        // result: is IdentifyResult class
        let props: any = {
            result: {
                items: [
                    {
                        data: featureData.data,
                        format: featureData.format,
                        loaded: true,
                        loading: Promise.resolve()
                    }
                ],
                uid: featureData.uid,
                loading: Promise.resolve(),
                loaded: true
            }
        };
        if (!itemsPanel.isOpen) {
            // open the items panel
            this.$iApi.panel!.open({
                id: 'details-items',
                screen: 'item-screen',
                props: props
            });
        } else {
            // update the items screen
            itemsPanel!.show({
                screen: 'item-screen',
                props: props
            });
        }
    }

    /**
     * Read the details section of the layers' fixture config
     *
     * @param {DetailsConfig} [config]
     * @memberof DetailsAPI
     */
    _parseConfig(config?: DetailsConfig) {
        // set the default templates if provided
        if (config && config.templates) {
            this.$vApp.$store.set(
                DetailsStore.defaultTemplates,
                config.templates
            );
        }

        this.handlePanelWidths(['details-items', 'details-layers']);

        // get all layer fixture configs
        let layerDetailsConfigs: any = this.getLayerFixtureConfigs();
        let detailsConfigItems: DetailsConfigItem[] = [];

        // construct the details config from the layer fixture configs
        Object.keys(layerDetailsConfigs).forEach((layerId: string) => {
            detailsConfigItems.push({
                id: layerId,
                name: layerDetailsConfigs[layerId].name,
                template: layerDetailsConfigs[layerId].template
            });
        });

        const detailsItems = detailsConfigItems.map(
            (item: any) => new DetailsItemInstance(item)
        );

        // save the items in the store
        this.$vApp.$store.set(
            DetailsStore.properties,
            detailsItems.reduce<DetailsItemSet>((map, item) => {
                map[item.id] = item;
                return map;
            }, {})
        );

        this._validateItems();
    }

    /**
     * Check to see if the stored components are registered properly.
     *
     * @memberof DetailsAPI
     */
    _validateItems() {
        Object.values(
            this.$vApp.$store.get<DetailsItemInstance[]>(
                DetailsStore.properties
            )!
        ).forEach(item => {
            if (item.template in this.$vApp.$options.components!) {
                this.$vApp.$store.set(
                    `${DetailsStore.properties}@${item.id}.componentId`,
                    item.template
                );
            }
        });
    }
}
