<!-- 使用插槽 -->
<template>
    <a-table :pagination="false"
             :data-source="data"
             rowKey="id">
        <a-table-column data-index="name"
                        title="name"></a-table-column>
        <a-table-column title="action">
            <template v-slot="scope">
                <table-action :scope="scope"
                              :actions="actions">
                    <template v-slot:detail>
                        {{scope.record}}
                    </template>
                </table-action>
            </template>
        </a-table-column>
    </a-table>
</template>
<script>
import { computed } from 'vue';
export default {
    setup() {
        const data = computed(() => {
            return [{ id: 1, name: 'tom' }];
        });
        const actions = computed(() => {
            return [
                {
                    slot: 'detail',
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