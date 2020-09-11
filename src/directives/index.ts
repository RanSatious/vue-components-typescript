import { App } from 'vue';
import loading from './loading';

export default <T>(app: App<T>) => {
    [loading].forEach(directive => {
        app.use(directive);
    });
};
