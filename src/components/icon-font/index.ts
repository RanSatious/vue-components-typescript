import { App } from 'vue';
import IconFont from './Index.vue';

export { IconFont };
export default <T>(app: App<T>) => {
    app.component(IconFont.name, IconFont);
};
