import Component from './Index.vue';
import { App, createApp, h, nextTick, reactive, watch } from 'vue';
import debounce from 'lodash/debounce';
import isNil from 'lodash/isNil';
import { EFFECTS, ITitleOption, MODES, POSITIONS, TitleElement, TitleOptionKey, ITitleData } from './type';
import './index.less';

const defaultOption: ITitleOption = {
    text: '',
    delay: 0,
    mode: 'always',
    position: 'bottom',
    updateDelay: 400,
    gap: 10,
    effect: 'dark'
};

const normalizeOption = (value?: ITitleOption): ITitleOption => {
    if (isNil(value)) {
        return {
            ...defaultOption,
            text: ''
        };
    }

    if (value && typeof value === 'object') {
        const data: ITitleOption = {};
        const { text, mode, position, effect } = value;

        if (!isNil(text)) {
            data.text = String(text);
        }

        const normalizeNumber = (key: TitleOptionKey, value: number, option: ITitleOption) => {
            if (!isNil(value) && !isNaN(value)) {
                option[key] = Math.max(0, Number(value));
            }
        };

        ['delay', 'updateDelay', 'gap'].forEach((key: TitleOptionKey) => {
            normalizeNumber(key, value[key] as number, data);
        });

        if (MODES.includes(mode)) {
            data.mode = mode;
        }

        if (POSITIONS.includes(position)) {
            data.position = position;
        }

        if (EFFECTS.includes(effect)) {
            data.effect = effect;
        }

        if (data.position === 'mouse') {
            data.delay = Math.max(500, data.delay || 0);
        }

        return {
            ...defaultOption,
            ...data
        };
    }

    return {
        ...defaultOption,
        text: String(value)
    };
};

function Title(container: HTMLElement, options: ITitleOption) {
    let instance: App;
    const host = document.createElement('div');
    host.className = 'segma-title-wrapper';

    const props = reactive(options);
    const data = reactive<ITitleData>({
        timer: {
            show: null,
            hide: null,
            destroy: null
        },
        mouse: {
            x: 0,
            y: 0
        },
        inside: false,
        show: false
    });

    watch(
        () => data.show,
        async val => {
            await nextTick();

            if (val) {
                document.body.appendChild(host);
            } else {
                setTimeout(() => {
                    if (instance) {
                        instance.unmount(host);
                        instance = null;
                    }
                    host.remove();
                }, 200);
            }
        },
        {
            immediate: true
        }
    );

    const updateMousePos = debounce((e: MouseEvent) => {
        if (!data.inside) {
            data.mouse = {
                x: e.clientX,
                y: e.clientY
            };
        }
    }, props.updateDelay);

    function onOver(e: MouseEvent) {
        clearTimeout(data.timer.hide);

        mount();
        updateMousePos(e);
    }

    function onLeave() {
        clearTimeout(data.timer.show);
        data.timer.show = null;
        data.timer.hide = window.setTimeout(() => {
            data.show = false;
        }, 100);
    }

    function onDown() {
        data.show = false;
    }

    function mount() {
        if (instance || data.timer.show) {
            return;
        }
        data.timer.show = window.setTimeout(() => {
            instance = createApp({
                setup() {
                    return () => h(Component, props);
                }
            });
            instance.provide<ITitleData>('data', data);
            instance.provide<HTMLElement>('container', container);
            instance.provide<HTMLElement>('host', host);
            instance.provide<() => void>('leave', onLeave);
            instance.mount(host);
        }, options.delay);
    }

    container.addEventListener('mousemove', onOver);
    container.addEventListener('mousedown', onDown);
    container.addEventListener('mouseleave', onLeave);

    return {
        props,
        data
    };
}

// 文字提示
export default (app: App) => {
    app.directive('title', {
        mounted(el: TitleElement, { value }) {
            el.vTitle = Title(el, normalizeOption(value));
        },
        updated(el: TitleElement, { value }) {
            const options = normalizeOption(value);
            Object.keys(options).forEach((key: TitleOptionKey) => {
                el.vTitle.props[key] = options[key];
            });
        }
    });
};
