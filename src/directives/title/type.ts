import { PropType } from 'vue';
import { Prop } from '../../utils/type';

export interface IRect {
    x: number;
    y: number;
    width: number;
    height: number;
}

export interface TitleElement extends HTMLElement {
    vTitle: ITitleInstance;
}

export interface ITitleOption {
    text?: string;
    delay?: number;
    mode?: Mode;
    position?: Position;
    updateDelay?: number;
    gap?: number;
    effect?: Effect;
    [key: string]: ITitleOption[keyof ITitleOption];
}

export type TitleOptionKey = [keyof ITitleOption] & string;

export interface ITitleData {
    timer: {
        show: number | null;
        hide: number | null;
        destroy: number | null;
    };
    mouse: {
        x: number;
        y: number;
    };
    inside: boolean;
    show: boolean;
}

export interface ITitleInstance {
    props: ITitleOption;
    data: ITitleData;
}

export interface ITitleProps {
    text: Prop<string>;
    delay: Prop<number>;
    mode: Prop<Mode>;
    position: Prop<Position>;
    updateDelay: Prop<number>;
    gap: Prop<number>;
    effect: Prop<Effect>;
}

export const getTitleProps = (): ITitleProps => {
    return {
        text: {
            type: String,
            default: ''
        },
        // 展示延迟
        delay: {
            type: Number,
            default: 0
        },
        mode: {
            type: String as PropType<Mode>,
            default: 'always'
        },
        position: {
            type: String as PropType<Position>,
            default: 'bottom'
        },
        // position为mouse时，title位置的更新延迟
        updateDelay: {
            type: Number,
            default: 400
        },
        gap: {
            type: Number,
            default: 10
        },
        // 主题
        effect: {
            type: String as PropType<Effect>,
            default: 'dark'
        }
    };
};

type TMode = ['always', 'overflow'];
export const MODES = ['always', 'overflow'];
export type Mode = TMode[number];

type TPosition = ['top', 'top-start', 'top-end', 'right', 'right-start', 'right-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'mouse'];
export const POSITIONS = ['top', 'top-start', 'top-end', 'right', 'right-start', 'right-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'mouse'];
export type Position = TPosition[number];

type TEffect = ['dark', 'light'];
export const EFFECTS = ['dark', 'light'];
export type Effect = TEffect[number];
