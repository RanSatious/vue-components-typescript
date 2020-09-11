<template>
    <a-modal v-model:visible="localVisible"
             :title="title"
             @ok="localVisible = false">
        custom dialog
    </a-modal>
</template>
<script lang="ts">
import { defineComponent, reactive, toRef, watchEffect } from 'vue';
import { getDialogProps, useDialog } from '../../../mixins/dialog';

export default defineComponent({
    name: 'DialogCustom',
    props: {
        ...getDialogProps(),
    },
    setup(props, context) {
        return useDialog(props, context);
    },
});
</script>
<style lang="less" scoped>
// todo
</style>
