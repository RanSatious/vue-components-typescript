import { reactive } from 'vue';

export interface IElementData {
    action: string;
}

export const useElement = (): IElementData => {
    return reactive({
        // drag/resize
        action: ''
    });
};
