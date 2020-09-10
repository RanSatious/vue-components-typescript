module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ['eslint-config-alloy/vue', '@vue/typescript'],
    parserOptions: {
        parser: '@typescript-eslint/parser'
    },
    rules: {
        'vue/component-tags-order': [
            'error',
            {
                order: ['template', 'script', 'style']
            }
        ],
        'vue/no-duplicate-attributes': 'off',
    }
};
