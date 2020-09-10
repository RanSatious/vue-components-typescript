import { App } from 'vue';
import IconFont from './icon-font';
import ProgressBar from './progress-bar';

export default <T>(app: App<T>) => {
    [IconFont, ProgressBar].forEach(component => {
        app.use(component);
    });
};
