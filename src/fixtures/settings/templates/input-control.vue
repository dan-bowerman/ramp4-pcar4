<template>
    <div>
        <div class="rv-label text-sm pt-10">
            {{ name }}
        </div>
        <div class="flex flex-row">
            <input
                class="rv-input text-md w-full"
                type="number"
                :value="config.value"
                :disabled="isDisabled"
                min="0"
                max="100"
            />
        </div>
        <div class="text-xs pt-10 text-gray-600 mb-20">
            {{ $t('settings.label.refreshOff') }}
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'SliderControl',
    props: {
        config: {
            type: Object,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true
        }
    },
    created() {
        this.watchers.push(
            // watch the config for changes to the disabled value
            this.$watch(
                'config',
                (newConfig: any) => {
                    this.isDisabled = !!newConfig.disabled;
                },
                { deep: true }
            )
        );
    },

    beforeUnmount() {
        this.watchers.forEach(unwatch => unwatch());
    },

    data() {
        return {
            isDisabled: !!this.config.disabled,
            watchers: [] as Array<Function>
        };
    }
});
</script>

<style lang="scss" scoped>
.rv-label {
    @apply flex items-center;
}
.rv-input {
    @apply p-5;
    border-bottom: 1px solid #ddd;
    margin-bottom: 1px;
}
.rv-input:focus {
    outline: none;
    border-bottom: 2px solid #ddd;
    margin-bottom: 0px;
}
.rv-input:disabled {
    color: #ddd;
}
</style>
