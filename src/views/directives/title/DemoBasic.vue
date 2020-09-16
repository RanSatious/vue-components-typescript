<!-- 基本用法 -->
<template>
    <div class="row">
        <a-button v-title="'文字提示'">文字提示</a-button>
        <icon-font v-title="'图标提示'"
                   name="se-icon-file"></icon-font>
    </div>
</template>
<style lang="less" scoped>
.row {
    display: flex;
    align-items: center;
}
.ant-btn {
    margin-right: 20px;
}

.icon {
    font-size: 32px;
    line-height: 0;
}
</style>