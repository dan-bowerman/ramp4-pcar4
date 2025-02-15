import type { ActionContext } from 'vuex';
import { make } from 'vuex-pathify';

import { OverviewmapState } from './overviewmap-state';
import type { RootState } from '@/store';

type OverviewMapContext = ActionContext<OverviewmapState, RootState>;

const getters = {};

const actions = {
    updateIntialBasemap: (context: OverviewMapContext, basemapId: string) => {
        context.commit('SET_INITIAL_BASEMAP', basemapId);
    }
};

const mutations = {
    SET_INITIAL_BASEMAP: (state: OverviewmapState, basemapId: string) => {
        state.mapConfig!.initialBasemapId = basemapId;
    }
};

export enum OverviewmapStore {
    /**
     * (State) mapConfig: RampMapConfig
     */
    mapConfig = 'overviewmap/mapConfig',
    /**
     * (State) basemaps: { [key: string]: RampBasemapConfig }
     */
    basemaps = 'overviewmap/basemaps',
    /**
     * (State) startMinimized: boolean
     */
    startMinimized = 'overviewmap/startMinimized',
    /**
     * (State) expandFactor: number
     */
    expandFactor = 'overviewmap/expandFactor',
    /**
     * (Action) updateIntialBasemap: (basemapId: string)
     */
    updateIntialBasemap = 'overviewmap/updateIntialBasemap!'
}

export function overviewmap() {
    const state = new OverviewmapState();

    return {
        namespaced: true,
        state,
        getters: { ...getters },
        actions: { ...actions, ...make.actions(state) },
        mutations: { ...mutations, ...make.mutations(state) }
    };
}
