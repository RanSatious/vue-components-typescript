import { App } from 'vue';
import ui from './ui';
import components from '../components';

export default <T>(app: App<T>) => {
    [ui, components].forEach(plugin => {
        app.use(plugin);
    });
};
