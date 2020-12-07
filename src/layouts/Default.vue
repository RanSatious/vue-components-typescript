<template>
    <div class="content">
        <router-view></router-view>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'DefaultLayout'
});
</script>
<style lang="less" scoped>
@import '../assets/css/scroll.less';

.ant-layout {
    height: 100%;
}
.ant-layout-header {
    background-color: #fff;
    border-bottom: 1px solid #f7f7f7;
    height: 40px;
    line-height: 40px;
    padding: 0 10px;

    .title {
        font-size: 18px;
        font-weight: bold;
    }
}

.ant-layout-sider {
    .scroll-bar();

    background-color: #fff;
    padding: 10px;
}

.ant-layout-content {
    padding: 10px;

    > .content {
        .scroll-bar();

        box-sizing: border-box;
        background-color: #fff;
        padding: 10px;
        height: 100%;
        overflow: auto;
    }
}
</style>
