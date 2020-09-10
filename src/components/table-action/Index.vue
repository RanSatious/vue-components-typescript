<template>
    <div class="table-action">
        <!-- 头部插槽 -->
        <slot name="prefix"></slot>
        <template v-for="(item, index) in actions">
            <!-- 动态插槽 -->
            <!-- 在`actions`中配置 -->
            <slot v-if="item.slot"
                  :name="item.slot"></slot>
            <span v-else-if="item.icon"
                  v-show="isShow(item.show)"
                  :key="`icon_${index}`"
                  :title="isDisable(item.disabled) ? '' : item.title">
                <icon-font :name="item.icon"
                           :class="[item.type, isDisable(item.disabled) ? 'disabled' : '']"
                           @click="item.handler && item.handler(scope)"></icon-font>
            </span>
            <template v-else>
                <span v-show="isShow(item.show)"
                      :key="`title_${index}`"
                      class="title"
                      :class="[item.type, isDisable(item.disabled) ? 'disabled' : '']"
                      @click="item.handler && item.handler(scope)">
                    {{ item.title }}
                </span>
            </template>
            <span v-if="index < showCount - 1"
                  v-show="isShow(item.show)"
                  :key="`span_${index}`"
                  class="divider"> </span>
        </template>
        <!-- 尾部插槽 -->
        <slot name="suffix"></slot>
    </div>
</template>
<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';

type show = (scope: unknown) => boolean;
type disable = (scope: unknown) => boolean;

interface IAction {
    // 操作类型，分普通和危险2种
    type?: 'primary' | 'danger';
    // 名称
    title: string;
    // 图标
    icon: string;
    // 是否显示该操作
    show?: boolean | show;
    // 是否禁用该操作
    disabled?: boolean | disable;
    // 点击事件回调
    handler?: (scope: unknown) => void;
    // 自定义插槽，使用之后其他属性无效
    slot?: string;
}

export default defineComponent({
    // 表格操作列组件
    name: 'TableAction',
    props: {
        // 定义操作
        actions: {
            type: Object as PropType<IAction[]>,
            default: () => [],
        },
        // 传递父组件层级的数据到组件
        scope: {
            type: Object,
            default: () => ({}),
        },
    },
    setup(props, context) {
        const showCount = computed(() => {
            return props.actions.filter((d) => isShow(d.show)).length;
        });

        const isShow = (callback?: boolean | show) => {
            if (typeof callback === 'undefined') {
                return true;
            }
            if (typeof callback !== 'function') {
                return !!callback;
            }
            return callback(props.scope);
        };
        const isDisable = (callback?: boolean | disable) => {
            if (typeof callback !== 'function') {
                return !!callback;
            }
            return callback(props.scope);
        };

        return {
            showCount,
            isShow,
            isDisable,
        };
    },
});
</script>
<style lang="less" scoped>
@color-primary: #5374c0;
@color-primary-hover: #364b7c;
@color-danger: #ff3333;
@color-danger-hover: #ff4747;

.table-action {
    white-space: nowrap;

    .title {
        padding: 0;
    }

    .icon {
        font-size: 20px;
    }

    .icon,
    .title {
        cursor: pointer;

        &.primary {
            color: @color-primary;

            &:hover {
                color: @color-primary-hover;
            }
        }

        &.danger {
            color: @color-danger;

            &:hover {
                color: @color-danger-hover;
            }
        }

        &.disabled,
        &.disabled:hover {
            color: rgba(0, 0, 0, 0.15);
            cursor: not-allowed;
        }
    }

    .divider {
        display: inline-block;
        position: relative;
        margin: 0 12px;
    }

    .divider::after {
        position: absolute;
        top: -10px;
        right: 0;
        width: 1px;
        height: 12px;
        background: rgba(0, 0, 0, 0.15);
        content: '';
    }
}
</style>
