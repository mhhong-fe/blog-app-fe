module.exports = {
    root: true,
    env: {
        es2021: true,
    },
    extends: ['@antfu/eslint-config', 'prettier'],
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': 'error',
        'vue/component-tags-order': [
            'error',
            {
                order: [['script', 'template'], 'style'],
            },
        ], // vue中的标签顺序
    },
};
