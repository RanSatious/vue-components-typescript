<template>
    <div>
        <a-button type="primary"
                  @click="visible = !visible">
            Open Modal
        </a-button>
        visible: {{visible}}
        <dialog-custom v-model:visible="visible"
                       title="title"></dialog-custom>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import DialogCustom from './Custom.vue';

export default defineComponent({
    components: {
        DialogCustom,
    },
    setup() {
        const visible = ref(false);

        return {
            visible,
        };
    },
});
</script>
<style lang="less" scoped>
// todo
</style>