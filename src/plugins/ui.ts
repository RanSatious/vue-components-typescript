import { App, Component } from 'vue';
import { ElButton, ElRadio, ElRadioButton, ElRadioGroup, ElTable, ElTableColumn, ElDialog, ElForm, ElFormItem, ElInput } from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

const ui = (component: Component) => {
    return (app: App) => {
        app.component(component.name, component);
    };
};

export default <T>(app: App<T>) => {
    [ElButton, ElRadio, ElRadioGroup, ElRadioButton, ElRadio, ElTable, ElTableColumn, ElDialog, ElForm, ElFormItem, ElInput].forEach(item => {
        app.use(ui(item));
    });
};
