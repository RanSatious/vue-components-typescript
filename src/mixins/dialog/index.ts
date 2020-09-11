import { computed, SetupContext } from 'vue';
import { PropsType, Prop } from '../../utils/type';

export interface IDialogProps {
    title: Prop<string>;
    visible: Prop<boolean>;
}

export interface DialogEmits {
    'update:visible': (visible: boolean) => void;
}

export const getDialogProps = (): IDialogProps => {
    return {
        // 标题
        title: {
            type: String,
            default: ''
        },
        // 是否可见
        visible: {
            type: Boolean,
            default: true
        }
    };
};

export const useDialog = (props: PropsType<IDialogProps>, context: unknown) => {
    const ctx = context as SetupContext<DialogEmits>;

    const localVisible = computed({
        get() {
            return props.visible;
        },
        set(val: boolean) {
            ctx.emit('update:visible', val);
        }
    });

    return {
        localVisible
    };
};
