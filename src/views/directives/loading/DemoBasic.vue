<template>
    <el-button @click="enable = !enable">toggle enable</el-button>{{enable}}
    <p>
        size:
        <el-radio-group v-model="size">
            <el-radio-button label="small">
                small
            </el-radio-button>
            <el-radio-button label="default">
                default
            </el-radio-button>
            <el-radio-button label="large">
                large
            </el-radio-button>
        </el-radio-group>
    </p>
    <p>
        delay:
        <el-radio-group v-model="delay"
                        name="delay">
            <el-radio-button :label="0">
                0
            </el-radio-button>
            <el-radio-button :label="1000">
                1000
            </el-radio-button>
        </el-radio-group>
    </p>
    <p>
        tip:
        <el-radio-group v-model="tip"
                        name="tip">
            <el-radio-button label="">
                none
            </el-radio-button>
            <el-radio-button label="tip text">
                tip text
            </el-radio-button>
        </el-radio-group>
    </p>
    <div v-if="enable">
        <el-button @click="loading = !loading">toggle loading</el-button>{{loading}}
        <div v-segma-loading="{loading, size, delay, tip}"
             class="basic">
            content
        </div>
    </div>
</template>
<script>
import { ref } from 'vue';
export default {
    name: 'DemoBasic',
    setup() {
        const loading = ref(false);
        const enable = ref(true);
        const size = ref('default');
        const delay = ref(0);
        const tip = ref('');
        return {
            loading,
            enable,
            size,
            delay,
            tip
        };
    }
};
</script>
<style lang="less" scoped>
.basic {
    height: 400px;
    background-color: #f7f7f7;
    text-align: center;
    line-height: 400px;
}
</style>