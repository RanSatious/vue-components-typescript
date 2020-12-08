<!-- 基本用法 -->
<template>
    <div class="row">
        <el-button v-title="'文字提示'">文字提示</el-button>
        <icon-font v-title="'图标提示'"
                   name="se-icon-file"></icon-font>
    </div>
</template>
<style lang="less" scoped>
.row {
    display: flex;
    align-items: center;
}

.icon {
    font-size: 32px;
    line-height: 0;
}
</style>