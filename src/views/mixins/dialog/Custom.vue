<template>
    <el-dialog v-model="localVisible"
               :title="title">
        custom dialog
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="localVisible = false">取 消</el-button>
                <el-button type="primary"
                           @click="localVisible = false">确 定</el-button>
            </span>
        </template>
    </el-dialog>
</template>
<script lang="ts">
import { defineComponent, reactive, toRef, watchEffect } from 'vue';
import { getDialogProps, useDialog } from '../../../mixins/dialog';

export default defineComponent({
    name: 'DialogCustom',
    props: {
        ...getDialogProps()
    },
    setup(props, context) {
        return useDialog(props, context);
    }
});
</script>
<style lang="less" scoped>
// todo
</style>
