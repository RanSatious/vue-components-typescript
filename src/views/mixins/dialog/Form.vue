<template>
    <el-dialog v-model="localVisible"
               :title="title">
        <el-form ref="formRef"
                 :model="form"
                 :rules="rules">
            <el-form-item prop="name"
                          label="name">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button :loading="loading"
                           @click="localVisible = false">取 消</el-button>
                <el-button type="primary"
                           :loading="loading"
                           @click="submit">确 定</el-button>
            </span>
        </template>
    </el-dialog>
</template>
<script lang="ts">
import { reactive, SetupContext } from 'vue';
import { getDialogFormProps, IDialogFormProps, useDialogForm } from '../../../mixins/dialog-form';

export default {
    name: 'DialogForm',
    props: {
        ...getDialogFormProps()
    },
    emits: ['save', 'update:visible'],
    setup(props, context) {
        return {
            rules: {
                name: [{ required: true, message: '请输入name' }]
            },
            ...useDialogForm(props, context, {
                form: reactive({
                    name: 'name'
                })
            })
        };
    }
};
</script>
<style lang="less" scoped>
// todo
</style>
