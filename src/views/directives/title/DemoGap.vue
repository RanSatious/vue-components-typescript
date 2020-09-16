<!-- 间距 -->
<!-- 文字提示与目标元素的间距，默认为10 -->
<template>
    <div>
        <a-button v-title="{text: 'gap = 0', gap: 0}">gap = 0</a-button>
        <a-button v-title="{text: 'gap = 20', gap: 20, position: 'right'}">gap = 20</a-button>
    </div>
</template>
<style lang="less" scoped>
.ant-btn {
    margin-right: 20px;
}
</style>