<template>
    <div class="relative" tabindex="-1">
        <button
            class="text-gray-500 hover:text-black focus:text-black p-8"
            :class="{ 'text-gray-700': active }"
            :content="$t('panels.controls.close')"
            v-tippy="{
                placement: 'bottom',
                theme: 'ramp4',
                animation: 'scale'
            }"
        >
            <svg
                class="fill-current w-16 h-16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 352 512"
            >
                <path
                    d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
                />
            </svg>
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'CloseV',
    props: {
        active: Boolean
    }
});
</script>

<style lang="scss" scoped></style>
