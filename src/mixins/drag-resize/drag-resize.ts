import { getResizeProps, useResize } from './resize';
import { getDragProps, useDrag } from './drag';
import { computed } from 'vue';
import { useElement } from './element';
import { PropsType } from '../../utils/type';
import { IDragResizeOptions, IDragResizeProps } from './prop';

export const getDragResizeProps = () => {
    return {
        ...getResizeProps(),
        ...getDragProps()
    };
};

export const useDragResize = (props: PropsType<IDragResizeProps>, context: unknown, { self }: IDragResizeOptions) => {
    const element = useElement();
    // 注意顺序，resize一定在drag前面
    const resize = useResize(props, context, { self, element });
    const drag = useDrag(props, context, { self, element });

    return {
        dragResizeStyle: computed(() => {
            if (element.action === 'drag') {
                const { top, left, ...rest } = resize.resizeStyle.value;
                return {
                    ...drag.dragStyle.value,
                    ...rest
                };
            }
            return resize.resizeStyle.value;
        })
    };
};
