<template>
    <div
        class="crosshairs absolute duration-150 top-1/2 left-1/2 h-230 w-230"
        :class="{ 'opacity-0': !visible }"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fit=""
            height="100%"
            width="100%"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
            focusable="false"
        >
            <g fill="#545353" stroke="#fff" id="crosshairs">
                <ellipse
                    ry=".254"
                    rx=".262"
                    id="path3808"
                    cx="12"
                    cy="12"
                    stroke-width=".076"
                ></ellipse>
                <path
                    d="M.045 12.047l6.093.051 4.264.068v-.332l-4.264.067-6.093.064v.039z"
                    id="rect4632-6"
                    stroke-width=".09"
                ></path>
                <path
                    d="M12.047 23.955l.051-6.093.068-4.264h-.332l.067 4.264.064 6.093h.039z"
                    id="rect4632-6-0"
                    stroke-width=".09"
                ></path>
                <path
                    d="M23.955 11.953l-6.093-.051-4.264-.068v.332l4.264-.067 6.093-.064v-.039z"
                    id="rect4632-6-4"
                    stroke-width=".09"
                ></path>
                <path
                    d="M11.953.045l-.051 6.093-.068 4.264h.332l-.067-4.264-.064-6.093h-.039z"
                    id="rect4632-6-9"
                    stroke-width=".09"
                ></path>
            </g>
        </svg>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { GlobalEvents } from '@/api';

export default defineComponent({
    name: 'CrosshairsV',
    data() {
        return {
            visible: false,
            handlers: [] as Array<string>
        };
    },

    mounted() {
        this.handlers.push(
            this.$iApi.event.on(GlobalEvents.MAP_EXTENTCHANGE, () => {
                // display crosshairs if pan/zoom keys are active
                if (this.$iApi.geo.map.keysActive) {
                    this.visible = true;
                }
            })
        );

        this.handlers.push(
            this.$iApi.event.on(GlobalEvents.MAP_FOCUS, () => {
                // display crosshairs only when focused with keyboard controls
                if (!this.$iApi.geo.map.mouseFocus) {
                    this.visible = true;
                }
            })
        );

        this.handlers.push(
            this.$iApi.event.on(GlobalEvents.MAP_MOUSEDOWN, () => {
                this.visible = false;
            })
        );

        this.handlers.push(
            this.$iApi.event.on(GlobalEvents.MAP_BLUR, () => {
                this.visible = false;
            })
        );
    },
    beforeUnmount() {
        this.handlers.forEach(h => this.$iApi.event.off(h));
    }
});
</script>

<style lang="scss" scoped>
.crosshairs {
    transform: translate(-50%, -50%);
}
</style>
