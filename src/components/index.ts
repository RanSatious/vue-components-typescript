import { App } from 'vue';
import IconFont from './icon-font';

export default <T>(app: App<T>) => {
    [IconFont].forEach(component => {
        app.use(component);
    });
};
