import { App } from 'vue';
import ui from './ui';

export default <T>(app: App<T>) => {
    [ui].forEach(plugin => {
        app.use(plugin);
    });
};
