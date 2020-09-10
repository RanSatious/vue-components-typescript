import { App } from 'vue';
import ProgressBar from './Index.vue';

export { ProgressBar };
export default <T>(app: App<T>) => {
    app.component(ProgressBar.name, ProgressBar);
};
