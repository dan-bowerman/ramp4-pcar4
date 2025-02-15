import type { PanelWidthObject } from '@/api';

export class HelpState {
    /**
     * name of help source folder
     *
     * @type {string}
     * @memberof HelpState
     */
    folderName = '';
}

export interface HelpConfig {
    folderName: string;
    panelWidth: PanelWidthObject | number;
}
