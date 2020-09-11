import { Ref } from 'vue';
import { Prop } from '../../utils/type';
import { IElementData } from './element';
import { IBaseProps } from './prop';

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
