<template>
    <ul class="layout-menu">
        <template v-for="type in types">
            <li v-if="type"
                :key="`${type}-category`"
                class="category">
                {{type}}
            </li>
            <li v-for="item in routes.filter(d => d.meta.type === type)"
                :key="item.name">
                <router-link :to="{name: item.name}">
                    {{item.meta.title}}
                </router-link>
            </li>
        </template>
    </ul>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useRouter, RouteRecordRaw } from 'vue-router';
import { IMetaOption, RouteType } from '../router/type';

export default defineComponent({
    name: 'LayoutMenu',
    setup() {
        const router = useRouter();

        const routes = computed(() => {
            return router.options.routes[0].children;
        });
        const types = computed(() => {
            return Object.values(RouteType).filter((d) => routes.value!.find((r) => (r.meta as IMetaOption).type === d));
        });
        console.log(routes.value, types.value);
        return {
            routes,
            types,
        };
    },
});
</script>
<style lang="less" scoped>
.layout-menu {
    list-style: none;
    padding: 0;
    margin: 0;

    .category {
        color: #999;
        margin: 20px 0 10px 0;
    }

    a {
        display: block;
        margin-bottom: 10px;
        text-decoration: none;
        color: rgba(0, 0, 0, 0.85);
        transition: all 0.3s;
        line-height: 30px;

        &.router-link-active,
        &:hover {
            color: #41b883;
        }
    }
}
</style>