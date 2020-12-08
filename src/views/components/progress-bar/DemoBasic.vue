<!-- 基本用法 -->
<template>
    <div class="demo-progress">
        <se-progress :percent="10"></se-progress>
        <se-progress :percent="20"
                     status="success"></se-progress>
        <se-progress :percent="30"
                     status="running"></se-progress>
        <se-progress :percent="40"
                     status="error"></se-progress>
        <se-progress :percent="40"
                     :offset="10"></se-progress>
        <se-progress :percent="40"
                     :stroke-height="10"></se-progress>
        <se-progress :percent="50"
                     :show-text="false"></se-progress>
        <se-progress :percent="20"
                     animation></se-progress>
        <se-progress animation
                     :show-text="false"></se-progress>
        <se-progress :percent="10">
            <i class="iconfont se-icon-zidingyi"></i>
        </se-progress>
    </div>
</template>
<style lang="less" scoped>
.demo-progress {
    width: 400px;

    .progress-bar-wrapper {
        margin-bottom: 10px;
    }
}
</style>