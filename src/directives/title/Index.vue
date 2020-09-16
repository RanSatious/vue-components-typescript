<template>
    <transition name="fade">
        <div v-if="data.show"
             class="se-title"
             :class="effect"
             @click.stop
             @mousedown.stop
             @dragstart.stop
             @mousemove.stop="onOver"
             @mouseleave="onLeave">
            {{ text }}
            <div class="caret"
                 :class="position"></div>
        </div>
    </transition>
</template>
<script lang="ts">
import { PropsType } from 'src/utils/type';
import { computed, defineComponent, inject, nextTick, onMounted, PropType, ref, SetupContext, watch } from 'vue';
import Placer from './placer';
import { getTitleProps, ITitleData, ITitleProps, Mode } from './type';

export default defineComponent({
    // 文字提示
    name: 'TitleDirective',
    props: {
        ...getTitleProps(),
    },
    setup(props: PropsType<ITitleProps>, context: SetupContext) {
        const container = inject<HTMLElement>('container');
        const host = inject<HTMLElement>('host');
        const data = inject<ITitleData>('data');
        const leave = inject<() => void>('leave');

        const top = ref(0);
        const left = ref(0);
        const placer = new Placer(props.gap);

        const check = async () => {
            await nextTick();

            data.show = props.text && (props.mode === 'always' || isElementOverflow(container));

            setTimeout(() => {
                if (data.show) {
                    if (props.position === 'mouse') {
                        nextTick(() => {
                            top.value = data.mouse.y + props.gap;
                            left.value = data.mouse.x + props.gap;
                        });
                    } else {
                        let rect = container.getBoundingClientRect();
                        let pos = placer[props.position](rect, host);
                        top.value = pos.top;
                        left.value = pos.left;
                    }
                }
            }, 0);
        };

        // solution from https://stackoverflow.com/questions/7738117/html-text-overflow-ellipsis-detection
        const isElementOverflow = (el: HTMLElement): boolean => {
            let parent = el.parentElement;
            let { paddingLeft, paddingRight, paddingTop, paddingBottom, borderLeft, borderRight, borderTop, borderBottom } = getComputedStyle(el);
            let innerWidth = el.offsetWidth - parseInt(paddingLeft, 10) - parseInt(paddingRight, 10) - parseInt(borderLeft, 10) - parseInt(borderRight, 10);
            let innerHeight = el.offsetHeight - parseInt(paddingTop, 10) - parseInt(paddingBottom, 10) - parseInt(borderTop, 10) - parseInt(borderBottom, 10);

            let clone = el.cloneNode(true);
            parent.appendChild(clone);
            let child = parent.children.item(parent.children.length - 1);
            child.setAttribute('style', 'position: absolute; padding: 0; border: none; width: auto; height: auto; visibility: hidden;');
            let width = child.scrollWidth;
            let height = child.scrollHeight;
            child.remove();

            return width > innerWidth || height > innerHeight;
        };

        watch(() => props.text, check);
        watch(
            () => props.gap,
            (val) => {
                placer.gap = val;
            }
        );
        watch(
            () => [top.value, left.value],
            ([top, left]) => {
                host.style.top = `${top}px`;
                host.style.left = `${left}px`;
            },
            {
                deep: true,
            }
        );
        watch(() => data.mouse, check, {
            deep: true,
        });

        const onOver = () => {
            clearTimeout(data.timer.hide);
            data.inside = true;
        };
        const onLeave = () => {
            leave();
            data.inside = false;
        };

        onMounted(check);

        return {
            top,
            left,
            placer,
            onOver,
            onLeave,
            data,
        };
    },
});
</script>
<style lang="less" scoped>
.se-title {
    box-sizing: border-box;
    border-radius: 4px;
    padding: 8px;
    font-size: 14px;
    line-height: 14px;
    white-space: nowrap;
    color: white;
    background-color: rgba(0, 0, 0, 0.75);
    box-shadow: 0 4px 12px rgba(82, 92, 108, 0.16);
    cursor: text;
    user-select: text;

    .caret-style(@color : rgba(0, 0, 0, 0.75)) {
        .caret[class*='top'] {
            border-top-color: @color;
        }

        .caret[class*='right'] {
            border-right-color: @color;
        }

        .caret[class*='bottom'] {
            border-bottom-color: @color;
        }

        .caret[class*='left'] {
            border-left-color: @color;
        }
    }

    &.light {
        color: rgba(93, 100, 112, 1);
        background: rgba(255, 255, 255, 1);
        .caret-style(rgba(255, 255, 255, 1));
    }

    .caret {
        position: absolute;
        border: 5px solid transparent;
        width: 0;
        height: 0;

        &.mouse {
            display: none;
        }

        &.top {
            bottom: -10px;
            left: 50%;
            margin-left: -5px;
        }

        &.top-start {
            bottom: -10px;
            left: 10px;
        }

        &.top-end {
            right: 10px;
            bottom: -10px;
        }

        &.right {
            top: 50%;
            left: -10px;
            margin-top: -5px;
        }

        &.right-start {
            top: 10px;
            left: -10px;
        }

        &.right-end {
            bottom: 10px;
            left: -10px;
        }

        &.bottom {
            top: -10px;
            left: 50%;
            margin-left: -5px;
        }

        &.bottom-start {
            top: -10px;
            left: 10px;
        }

        &.bottom-end {
            top: -10px;
            right: 10px;
        }

        &.left {
            top: 50%;
            right: -10px;
            margin-top: -5px;
        }

        &.left-start {
            top: 10px;
            right: -10px;
        }

        &.left-end {
            right: -10px;
            bottom: 10px;
        }
    }

    .caret-style();
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
