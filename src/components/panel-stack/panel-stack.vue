<template>
    <transition-group
        @enter="enter"
        @leave="leave"
        name="panel-container"
        tag="div"
    >
        <!-- TODO: pass a corresponding fixture instance to the panel component as it can be useful -->
        <panel-container
            v-for="panel in visible($iApi.screenSize)"
            :key="`${panel.id}`"
            :panel="panel"
        ></panel-container>
    </transition-group>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import anime from 'animejs';

import PanelContainerV from './panel-container.vue';

declare class ResizeObserver {
    constructor(callback: Function);
    observe(target: Element): void;
    unobserve(target: Element): void;
    disconnect(): void;
}

export default defineComponent({
    name: 'PanelStackV',
    components: {
        'panel-container': PanelContainerV
    },

    data() {
        return {
            visible: this.get('panel/getVisible')
        };
    },

    mounted(): void {
        // sync the `panel-stack` width into the store so that visible can get calculated
        const resizeObserver = new ResizeObserver((entries: any) => {
            // Determine if the app is in mobile mode (the app container ONLY has the `xs` class on it. If it contains `sm`
            // then the screen is too large).
            this.$store.set(
                'panel/mobileView',
                !this.$root?.$el.classList.contains('sm')
            );

            this.$store.set('panel/stackWidth', entries[0].contentRect.width);
        });

        resizeObserver.observe(this.$el);
    },

    methods: {
        enter(el: HTMLElement, done: () => void): void {
            this.animateTransition(el, done, [
                [6, 0],
                [0, 1]
            ]);
        },

        leave(el: HTMLElement, done: () => {}): void {
            const [bbox, pbbox] = [
                el.children[0].getBoundingClientRect(),
                el.parentElement!.getBoundingClientRect()
            ];

            // the panel will be positioned `absolute` and it will screw up its dimensions
            // to prevent this, set width/height/left manually before detaching the panel
            el.style.width = `${bbox.width}px`;
            el.style.height = `${bbox.height}px`;
            el.style.left = `${bbox.left - pbbox.left}px`;

            // without this, the FLIP transition won't work
            el.style.position = 'absolute';

            this.animateTransition(el, done, [
                [0, -6],
                [1, 0]
            ]);
        },

        /**
         * Animate transition between panel screen components by fading them in/out.
         */
        animateTransition(
            el: HTMLElement,
            done: () => void,
            values: number[][]
        ): void {
            anime({
                targets: el,
                duration: 300,
                translateY: {
                    value: values[0],
                    easing: 'cubicBezier(.5, .05, .1, .3)'
                },
                opacity: {
                    value: values[1],
                    duration: 250,
                    easing: 'cubicBezier(.5, .05, .1, .3)'
                },
                complete: done
            });
        }
    }
});
</script>

<style lang="scss" scoped>
// this is needed to trigger the FLIP list transition; doesn't seem possible to do it using JS only
// https://vuejs.org/v2/guide/transitions.html#List-Move-Transitions
.panel-container-move {
    transition: 0.3s transform cubic-bezier(0.22, 0.61, 0.36, 1);
}
</style>
