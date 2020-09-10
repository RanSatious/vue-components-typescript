<!-- 使用图标 -->
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
import { computed } from 'vue';
export default {
    setup() {
        const data = computed(() => {
            return [{ id: 1, name: 'tom' }];
        });
        const actions = computed(() => {
            return [
                {
                    icon: 'se-icon-zidingyi',
                    type: 'primary',
                    handler({ record, index }) {
                        console.log(record, index);
                    },
                },
                {
                    icon: 'se-icon-f-delete',
                    type: 'danger',
                    handler({ record, index }) {
                        console.log(record, index);
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