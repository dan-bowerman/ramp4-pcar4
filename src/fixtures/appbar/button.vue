<template>
    <div class="relative" tabindex="-1">
        <button
            class="py-6 w-full h-full"
            @click="
                () => {
                    onClickFunction();
                    onClick();
                }
            "
            v-focus-item
            :content="tooltip"
            v-tippy="{ placement: 'right' }"
        >
            <slot></slot>
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'AppbarButtonV',
    props: {
        onClickFunction: {
            type: Function,
            required: true
        },
        id: {
            type: String,
            required: true
        },
        tooltip: {
            type: [String, Boolean],
            default: false
        }
    },
    methods: {
        onClick() {
            // TODO: change fixtures to use this instead of click handlers in <fixture>-appbar-button?
            this.$iApi.event.emit('appbar/click', this.id);
        }
    }
});
</script>

<style lang="scss" scoped>
button {
    outline: none !important;

    &.focused {
        @apply bg-blue-900 text-white;
    }
}
</style>
