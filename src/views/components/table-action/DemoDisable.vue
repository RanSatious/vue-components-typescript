<!-- 禁用状态 -->
<template>
    <a-table :pagination="false"
             :data-source="data"
             rowKey="id">
        <a-table-column data-index="name"
                        title="name"></a-table-column>
        <a-table-column title="action">
            <template v-slot="scope">
                <table-action :scope="scope"
                              :actions="actions"></table-action>
            </template>
        </a-table-column>
    </a-table>
</template>
<script>
import { computed, ref } from 'vue';
export default {
    setup() {
        const data = computed(() => {
            return [{ id: 1, name: 'tom' }];
        });
        const disabled = ref(false);

        const actions = computed(() => {
            return [
                {
                    title: disabled.value ? '恢复' : '禁用',
                    type: 'primary',
                    handler: ({ record, index }) => {
                        disabled.value = !disabled.value;
                    },
                },
                {
                    title: '删除',
                    type: 'danger',
                    disabled: disabled.value,
                },
                {
                    title: '删除',
                    type: 'danger',
                    disabled: ({ record, index }) => {
                        return disabled.value;
                    },
                },
            ];
        });

        return {
            data,
            actions,
        };
    },
};
</script>