<template>
    <div class="relative" tabindex="-1">
        <button
            class="text-gray-500 hover:text-black focus:text-black p-6"
            :class="{ 'text-gray-700': active }"
            :content="$t('panels.controls.minimize')"
            v-tippy="{
                placement: 'bottom',
                theme: 'ramp4',
                animation: 'scale'
            }"
        >
            <svg
                class="fill-current w-20 h-20"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
            >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M6 19h12v2H6z" />
            </svg>
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'MinimizeV',
    props: {
        active: {
            type: Boolean
        }
    }
});
</script>

<style lang="scss" scoped></style>
