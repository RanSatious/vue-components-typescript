<!-- 主题效果 -->
<!-- 可使用 `dark`/`light` 2种主题，默认为`dark` -->
<template>
    <div>
        <a-button v-title="'dark'">默认主题</a-button>
        <a-button v-title="{text: 'light', effect: 'light'}">light主题</a-button>
    </div>
</template>
<style lang="less" scoped>
.ant-btn {
    margin-right: 20px;
}
</style>