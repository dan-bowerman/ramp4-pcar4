import { FixtureInstance } from '@/api';
import { GridStore } from '../store';
import type { GridConfig } from '../store';
import TableStateManager from '../store/table-state-manager';

export class GridAPI extends FixtureInstance {
    /**
     * Open the grid for the layer with the given uid.
     *
     * @param {string} uid
     * @param {boolean} [open] force panel open or closed
     * @memberof GridAPI
     */
    toggleGrid(uid: string, open?: boolean): void {
        // get GridConfig for specified uid
        let gridSettings: GridConfig | undefined = this.$vApp.$store.get(
            `${GridStore.grids}@${uid}`
        );

        // if no GridConfig exists for the given uid, create it.
        if (gridSettings === undefined) {
            gridSettings = {
                uid: uid,
                state: new TableStateManager({
                    table: {
                        showFilter: true,
                        filterByExtent: false
                    }
                })
            };

            this.$vApp.$store.set('grid/addGrid!', gridSettings);
        }

        const prevUid = this.$vApp.$store.get(GridStore.currentUid);
        this.$vApp.$store.set(GridStore.currentUid, uid ? uid : null);

        const panel = this.$iApi.panel.get('grid');

        if (open === false) {
            // force close
            panel.close();
            return;
        }

        if (!panel.isOpen) {
            this.$iApi.panel.open('grid');
        } else if (prevUid !== uid || open === true) {
            // don't toggle off if different layer or force open, use key prop to force rerender
            panel.show({ screen: 'grid-screen', props: { key: uid } });
        } else {
            panel.close();
        }
    }

    /**
     * Parses the grid config JSON snippet from the config file.
     *
     * @param {GridConfig} [gridConfig]
     * @memberof GridAPI
     */
    _parseConfig(gridConfig?: GridConfig) {
        if (!gridConfig) return;

        this.handlePanelWidths(['grid']);
    }
}
