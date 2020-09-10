import { Button, Form, Modal, Input, Layout, Radio, Spin } from 'ant-design-vue';
import { App } from 'vue';

export default <T>(app: App<T>) => {
    app.use(Button);
    app.use(Form);
    app.use(Input);
    app.use(Modal);
    app.use(Layout);
    app.use(Radio);
    app.use(Spin);
};
