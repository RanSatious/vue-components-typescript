import { Prop } from '../../utils/type';
import { Ref } from 'vue';
import { IElementData } from './element';

export interface IBaseProps {
    top: Prop<number>;
    left: Prop<number>;
}

export interface IRectProps extends IBaseProps {
    width: Prop<number>;
    height: Prop<number>;
}

export interface IDragProps extends IBaseProps {
    step: Prop<number>;
    gap: Prop<number>;
    overflow: Prop<boolean>;
    group: Prop<string>;
}

export interface DragEmits {
    'update:top': (value: number) => void;
    'update:left': (value: number) => void;
}

export interface IResizeProps extends IRectProps {
    mode: Prop<string>;
    border: Prop<number>;
}

export interface ResizeEmits extends DragEmits {
    'update:width': (value: number) => void;
    'update:height': (value: number) => void;
}

export interface IDragResizeOptions {
    self: Ref<HTMLElement | null>;
    element?: IElementData;
}

export interface DragEmits {
    'update:top': (value: number) => void;
    'update:left': (value: number) => void;
}

export interface IDragResizeProps extends IDragProps, IResizeProps {}

export const getBaseProps = (): IBaseProps => ({
    top: {
        type: Number,
        default: 0
    },
    left: {
        type: Number,
        default: 0
    }
});

export const getRectProps = (): IRectProps => ({
    ...getBaseProps(),
    width: {
        type: Number,
        default: 200
    },
    height: {
        type: Number,
        default: 200
    }
});
