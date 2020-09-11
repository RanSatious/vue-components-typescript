import { App } from 'vue';
import ui from './ui';
import components from '../components';
import directives from '../directives';

export default <T>(app: App<T>) => {
    [ui, components, directives].forEach(plugin => {
        app.use(plugin);
    });
};
