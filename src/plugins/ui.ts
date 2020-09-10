import { Button } from 'ant-design-vue';
import { App } from 'vue';

export default <T>(app: App<T>) => {
    app.use(Button);
};
