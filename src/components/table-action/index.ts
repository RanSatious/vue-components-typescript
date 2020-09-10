import TableAction from './Index.vue';
import { App } from 'vue';

export { TableAction };
export default <T>(app: App<T>) => {
    app.component(TableAction.name, TableAction);
};
