<template>
    <div class="color-page">
        <h2>主题色 - Primary Color</h2>
        <div class="primary-color">
            <div v-for="item in presets"
                 :key="item[0]"
                 :style="{ 'background-color': item[1], width: `${100 / presets.length}%` }"
                 @click="onCopy(item[1])">
                {{ item[0] }}
            </div>
        </div>
        <h2>颜色分解 - Color Detail</h2>
        <div class="color-detail">
            <div v-for="(item, index) in colors"
                 :key="index"
                 class="color">
                <div v-for="(color, index) in item[1]"
                     :key="index"
                     :style="{'background-color': color, color: index >= item[1].length / 2 ? 'white' : 'black'}"
                     @click="onCopy(color)">
                    <span class="title">{{ `${item[0]}-${index + 1}` }}</span>
                    <span class="value">{{color}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { message } from 'ant-design-vue';
import { useClipboard } from '../common';
import { defineComponent } from 'vue';
import { presetPrimaryColors, presetPalettes } from '../style/color';

export default defineComponent({
    name: 'ColorPage',
    setup() {
        const { copy } = useClipboard();
        return {
            colors: Object.entries(presetPalettes),
            presets: Object.entries(presetPrimaryColors),
            async onCopy(color: string) {
                try {
                    await copy(color);
                    message.success(`${color} copied!`);
                } catch (error) {
                    message.error(error);
                }
            },
        };
    },
});
</script>
<style lang="less" scoped>
.primary-color {
    display: flex;

    > div {
        height: 100px;
        text-align: center;
        line-height: 100px;
        color: white;
        cursor: pointer;
        transition: all 0.2s;

        &:hover {
            margin-top: -8px;
        }
    }
}

.color-detail {
    display: flex;
    flex-wrap: wrap;

    .color {
        width: 33.3%;
        padding: 10px;

        > div {
            cursor: pointer;
            transition: all 0.2s;
            padding: 0 10px;
            line-height: 40px;

            .value {
                float: right;
            }

            &:hover {
                margin-right: -8px;
            }
        }

        .value {
            opacity: 0;
            transition: all 0.2s;
        }

        &:hover {
            .value {
                opacity: 1;
            }
        }
    }
}

h2:not(:first-child) {
    margin-top: 20px;
}
</style>
