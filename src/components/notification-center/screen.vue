<template>
    <panel-screen :panel="panel">
        <template #header>
            {{ $t('notifications.title') }}
        </template>

        <template #content>
            <div class="h-full flex flex-col">
                <div class="w-full flex mb-6">
                    <button
                        @click="clearAll"
                        class="text-gray-500 hover:text-black p-4 ml-auto"
                        :content="$t('notifications.controls.clearAll')"
                        v-tippy="{
                            placement: 'bottom',
                            theme: 'ramp4',
                            animation: 'scale'
                        }"
                    >
                        <!-- https://fonts.google.com/icons?selected=Material%20Icons%3Aclear_all -->
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            class="fill-current h-24 w-24"
                        >
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path
                                d="M5 13h14v-2H5v2zm-2 4h14v-2H3v2zM7 7v2h14V7H7z"
                            />
                        </svg>
                    </button>
                </div>
                <notification-list class="overflow-y-auto"></notification-list>
            </div>
        </template>
    </panel-screen>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue';
import type { PropType } from 'vue';

import type { PanelInstance } from '@/api';

export default defineComponent({
    name: 'NotificationsScreenV',
    props: {
        panel: {
            type: Object as PropType<PanelInstance>,
            required: true
        }
    },

    components: {
        'notification-list': defineAsyncComponent(
            () => import('./notification-list.vue')
        )
    },

    data() {
        return {
            clearAll: this.call('notification/clearAll')
        };
    }
});
</script>

<style lang="scss"></style>
