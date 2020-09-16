import { App } from 'vue';
import loading from './loading';
import title from './title';

export default <T>(app: App<T>) => {
    [loading, title].forEach(directive => {
        app.use(directive);
    });
};
