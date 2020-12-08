<!-- 溢出提示 -->
<!-- 有`always`/`overflow` 2种模式，`always`模式会始终显示提示，`overflow`模式只会在目标元素内容溢出时才显示提示，默认为`always` -->
<template>
    <div class="row">
        <span v-title="{text: '超长的文字提示', mode: 'overflow'}">超长的文字提示</span>
        <span v-title="{text: '文字提示', mode: 'overflow'}">长的文字提示</span>
    </div>
</template>
<style lang="less" scoped>
span {
    display: inline-block;
    margin-right: 20px;
    width: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 0 10px;
    border: 1px solid #ccc;
}
</style>