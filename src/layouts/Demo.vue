<template>
    <div class="page">
        <template v-for="item in demos"
                  :key="item.name">
            <h2>{{item.title}}</h2>
            <section class="section-code">
                <component :is="item.component"
                           :ref="item.name">
                </component>
            </section>
        </template>

    </div>
</template>
<script lang="ts">
import { IMetaOption, RouteType } from '@/router/type';
import { computed, defineAsyncComponent, defineComponent, reactive, watch } from 'vue';
import { useRoute } from 'vue-router';
import { IDemoSection, RoutePathMap } from '../utils/type';

interface IDemoData {
    section: IDemoSection[];
    doc: string;
    name: string;
}

export default defineComponent({
    name: 'DemoPage',
    setup() {
        const data = reactive<IDemoData>({
            section: [],
            doc: '',
            name: '',
        });
        const demos = computed(() => {
            if (!data.name) {
                return [];
            }

            const startCase = (value: string): string => (value ? value[0].toUpperCase() + value.substring(1) : '');
            return data.section.map(({ name, title, category }) => {
                return {
                    name,
                    title,
                    component: defineAsyncComponent(() => import(/* webpackChunkName: "demo" */ `../views/${category}/${data.name}/Demo${startCase(name)}.vue`)),
                };
            });
        });

        const route = useRoute();

        watch(
            () => route.meta as IMetaOption,
            (val) => {
                const { doc = '', section = [], name = '', type } = val;
                data.doc = doc;
                data.section = section.map(({ name, title }) => ({
                    name,
                    title,
                    category: RoutePathMap[type],
                }));
                data.name = name;
            },
            {
                immediate: true,
            }
        );

        return {
            demos,
        };
    },
});
</script>
<style lang="less" scoped>
.section-code {
    border: 1px solid #ebebeb;
    border-radius: 4px;
    padding: 10px;
    transition: all 0.5s;

    .source {
        padding: 20px;
    }

    &:hover {
        box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6), 0 2px 4px 0 rgba(232, 237, 250, 0.5);
    }
}

.page {
    h2 {
        font-size: 18px;

        &:not(:first-child) {
            margin: 40px 0 20px 0;
        }
    }
}
</style>