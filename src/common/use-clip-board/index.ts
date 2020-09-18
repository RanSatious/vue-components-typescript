import { ref } from 'vue';

function useClipboard() {
    const text = ref('');

    /**
     * 复制文本到剪贴板
     *
     * @param {string} content
     * @returns
     */
    const copy = async (content: string) => {
        if (!window.navigator.clipboard) {
            const input = document.createElement('input');
            document.body.appendChild(input);
            input.setAttribute('value', content);
            input.select();
            document.execCommand('copy', false);
            input.remove();
            return;
        } else {
            await window.navigator.clipboard.writeText(content);
        }
        text.value = content;
    };

    return { copy, text };
}

export { useClipboard };
