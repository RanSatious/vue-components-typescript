import { createApp, h, reactive, watch, nextTick, App } from 'vue';
import { Spin } from 'ant-design-vue';
import isNil from 'lodash/isNil';
import './index.less';

type TSize = ['small', 'default', 'large'];
const SIZES: TSize = ['small', 'default', 'large'];
type Size = TSize[number];

export interface ILoadingOption {
    loading?: boolean;
    size?: Size;
    tip?: string;
    delay?: number;
}

interface LoadingElement extends HTMLElement {
    vLoading: ILoadingOption;
}

const defaultOption: ILoadingOption = {
    loading: false,
    size: 'large',
    tip: '',
    delay: 0
};

const normalizeOption = (option: ILoadingOption | boolean): ILoadingOption => {
    if (isNil(option)) {
        return {
            ...defaultOption,
            loading: true
        };
    }

    if (typeof option === 'boolean') {
        return {
            ...defaultOption,
            loading: option
        };
    }

    if (option && typeof option === 'object') {
        const data: ILoadingOption = {};
        const { loading, tip, size, delay } = option;

        data.loading = !!loading;

        if (!isNil(tip)) {
            data.tip = String(tip);
        }

        if (SIZES.includes(size)) {
            data.size = size;
        }

        if (!isNil(delay) && !isNaN(delay)) {
            data.delay = Math.max(0, Number(delay));
        }

        return {
            ...defaultOption,
            ...data
        };
    }

    return defaultOption;
};

export default <T>(app: App<T>) => {
    app.directive('segma-loading', {
        mounted(el: LoadingElement, { value }) {
            const data = reactive(normalizeOption(value));

            let positonChanged = false;
            watch(
                () => data.loading,
                async val => {
                    await nextTick();
                    if (val) {
                        const { position } = getComputedStyle(el);
                        if (position === 'static') {
                            el.style.position = 'relative';
                            positonChanged = true;
                        }
                        el.appendChild(container);
                    } else {
                        if (positonChanged) {
                            el.style.position = '';
                        }
                        container.remove();
                    }
                },
                {
                    immediate: true
                }
            );

            const container = document.createElement('div');
            container.className = 'segma-loading-wrapper';

            createApp({
                setup() {
                    return () =>
                        h(Spin, {
                            spinning: data.loading,
                            tip: data.tip,
                            size: data.size,
                            delay: data.delay
                        });
                }
            }).mount(container);
            el.vLoading = data;
        },
        updated(el: LoadingElement, { value }) {
            const { loading, tip, size, delay } = normalizeOption(value);
            el.vLoading.loading = loading;
            el.vLoading.tip = tip;
            el.vLoading.size = size;
            el.vLoading.delay = delay;
        }
    });
};
