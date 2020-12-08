<template>
    <div class="header">
        <router-link :to="{name: 'home'}"
                     class="title">Segma Vue Components typescript</router-link>
    </div>
    <div class="main">
        <div class="slider">
            <nav-menu></nav-menu>
        </div>
        <div class="content-wrapper">
            <div class="content">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import NavMenu from './Menu.vue';

export default defineComponent({
    name: 'DefaultLayout',
    components: {
        NavMenu
    },
    setup() {
        onMounted(() => {
            document.title = 'Segma 组件库';
        });
    }
});
</script>
<style lang="less" scoped>
@import '../assets/css/scroll.less';
.header {
    height: 40px;
    border-bottom: 1px solid #ccc;
    line-height: 40px;
    box-sizing: border-box;
    padding: 0 10px;

    .title {
        font-size: 18px;
        font-weight: bold;
        color: rgba(0, 0, 0, 0.85);
        text-decoration: none;
    }
}

.main {
    box-sizing: border-box;
    height: calc(100% - 40px);
    display: flex;

    .slider {
        .scroll-bar();
        overflow: auto;
        width: 240px;
        background-color: #fff;
        padding: 10px;
    }

    .content-wrapper {
        padding: 10px;
        flex: 1;
        background-color: #f7f7f7;

        > .content {
            .scroll-bar();

            box-sizing: border-box;
            background-color: #fff;
            padding: 10px;
            height: 100%;
            overflow: auto;
        }
    }
}
</style>
