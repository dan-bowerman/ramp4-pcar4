import { FixtureInstance } from '@/api';
import { HelpStore } from '../store';
import type { HelpConfig } from '../store';

export class HelpAPI extends FixtureInstance {
    /**
     * Toggles help panel
     *
     * @param {boolean} [open] force panel open or closed
     * @memberof HelpAPI
     */
    toggleHelp(open?: boolean) {
        const panel = this.$iApi.panel.get('help');
        if (open === undefined) {
            this.$iApi.panel.toggle(panel);
        } else if (open && !panel.isOpen) {
            this.$iApi.panel.open(panel);
        } else if (!open && panel.isOpen) {
            this.$iApi.panel.close(panel);
        }
    }

    /**
     * Returns `HelpConfig` section of the global config file.
     *
     * @readonly
     * @type {HelpConfig}
     * @memberof HelpAPI
     */
    get config(): HelpConfig | undefined {
        return super.config;
    }

    /**
     * Parses the help config JSON snippet from the config file and save to the fixture store.
     *
     * @param {HelpConfig} [helpConfig]
     * @memberof HelpAPI
     */
    _parseConfig(helpConfig?: HelpConfig) {
        if (!helpConfig) return;
        this.$vApp.$store.set(HelpStore.folderName, helpConfig.folderName);

        this.handlePanelWidths(['help']);
    }
}
