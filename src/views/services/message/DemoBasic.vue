<template>
    <div>
        <el-button @click="alert">alert</el-button>
        <el-button @click="confirm">confirm</el-button>
    </div>
</template>
<script>
import { Message } from '../../../services';
export default {
    name: 'DemoBasic',
    setup() {
        return {
            alert() {
                Message.alert('alert');
            },
            confirm() {
                Message.confirm('confirm');
            }
        };
    }
};
</script>
<style lang="less" scoped>
.el-button {
    margin-right: 10px;
}
</style>