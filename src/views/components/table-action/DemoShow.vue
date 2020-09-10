<!-- 显示/隐藏 -->
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
        const show = ref(false);

        const actions = computed(() => {
            return [
                {
                    title: show.value ? '隐藏' : '显示',
                    type: 'primary',
                    handler: ({ record, index }) => {
                        show.value = !show.value;
                    },
                },
                {
                    title: '删除',
                    type: 'danger',
                    show: show.value,
                },
                {
                    title: '删除',
                    type: 'danger',
                    show: ({ record, index }) => {
                        return show.value;
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