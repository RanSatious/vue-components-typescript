<template>
    <div class="home">
        <img alt="Vue logo"
             src="../assets/logo.png">
        <h1>Segma Vue Components typescript</h1>
        <el-button>asd</el-button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Home'
});
</script>
<style lang="less" scoped>
.home {
    text-align: center;
}
</style>