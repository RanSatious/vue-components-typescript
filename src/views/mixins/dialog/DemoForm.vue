<template>
    <div>
        <el-button @click="dialog.visible = !dialog.visible">toggle form dialog</el-button>
        <dialog-form v-model:visible="dialog.visible"
                     title="form-dialog"
                     @save="onSave"></dialog-form>
    </div>
</template>
<script lang="ts">
import { reactive } from 'vue';
import DialogForm from './Form.vue';

interface IFormData {
    name: string;
}

export default {
    name: 'DemoForm',
    components: {
        DialogForm
    },
    setup() {
        const dialog = reactive({
            visible: false
        });
        return {
            dialog,
            onSave(form: IFormData, resolve: () => void, reject: () => void) {
                console.log(form);
                setTimeout(() => {
                    resolve();
                    dialog.visible = false;
                }, 1000);
            }
        };
    }
};
</script>
<style lang="less" scoped>
// todo
</style>