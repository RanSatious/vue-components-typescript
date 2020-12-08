import { getDialogProps, useDialog, IDialogProps, DialogEmits } from '../dialog';
import { ref, SetupContext, toRaw, UnwrapRef } from 'vue';
import { Prop, PropsType, RefForm } from '../../utils/type';

export interface IDialogFormProps extends IDialogProps {
    data: Prop<object>;
}

export interface DialogFormEmits extends DialogEmits {
    save: (result: unknown, resolve: (value?: unknown) => void, reject: (value?: unknown) => void) => void;
}

export const getDialogFormProps = (): IDialogFormProps => {
    return {
        ...getDialogProps(),
        // 传入组件的数据，通常在执行编辑某个项目，打开对话框时使用
        data: {
            type: Object,
            default: () => ({})
        }
    };
};

interface IDialogFormOptions<T> {
    save?: (data: UnwrapRef<T>) => Promise<void>;
    form?: UnwrapRef<T>;
}

export const useDialogForm = <T extends object>(props: PropsType<IDialogFormProps>, context: unknown, options: IDialogFormOptions<T> = {}) => {
    const ctx = context as SetupContext<DialogFormEmits>;

    // 加载状态
    const loading = ref(false);
    // 表单数据
    const formRef = ref<RefForm<T>>(null);

    /**
     * 提交表单，默认会触发`save`事件，如果组件定义了save方法，会覆盖默认行为
     * @returns {Promise}
     */
    const submit = async () => {
        if (loading.value) {
            return;
        }

        try {
            loading.value = true;

            let result: UnwrapRef<T>;
            if (formRef.value) {
                await formRef.value!.validate();
                result = formRef.value.model;
            }

            if (typeof options.save === 'function') {
                await options.save(result);
            } else {
                await new Promise((resolve, reject) => {
                    /**
                     * 提交表单时触发
                     * @param {object} form 表单数据
                     * @param {() => void} resolve 回调函数，回调操作成功时调用
                     * @param {() => void} reject 回调函数，回调操作失败时调用
                     */
                    ctx.emit('save', result, resolve, reject);
                });
            }
        } catch (error) {
            console.log(error);
        } finally {
            loading.value = false;
        }
    };

    return {
        loading,
        form: options.form,
        formRef,
        submit,
        ...useDialog(props, context)
    };
};
