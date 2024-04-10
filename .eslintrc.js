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
        // 'object-curly-newline': [
        //     'error',
        //     {
        //         ObjectExpression: {
        //             minProperties: 3,
        //             multiline: true,
        //             consistent: true,
        //         },
        //         ObjectPattern: {
        //             minProperties: 3,
        //             multiline: true,
        //             consistent: true,
        //         },
        //         ImportDeclaration: {
        //             minProperties: 3,
        //             multiline: true,
        //             consistent: true,
        //         },
        //         ExportDeclaration: {
        //             minProperties: 3,
        //             multiline: true,
        //             consistent: true,
        //         },
        //     },
        // ],
        'array-bracket-newline': ['error', {multiline: true}],
    },
};
