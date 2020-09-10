import { App } from 'vue';
import IconFont from './icon-font';
import ProgressBar from './progress-bar';
import TableAction from './table-action';

export default <T>(app: App<T>) => {
    [IconFont, ProgressBar, TableAction].forEach(component => {
        app.use(component);
    });
};
