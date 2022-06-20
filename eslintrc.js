module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: '2020',
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
        },
        sourceType: 'module',
    },
    env: {
        node: true,
        es6: true,
        es2020: true,
    },
    extends: [
        'pronos',
    ],
    overrides: [{
        files: ['*.ts', '*.tsx'],
        extends: ['pronos/typescript'],
        parserOptions: {
            project: [
                './tsconfig.json',
                './tsconfig.eslint.json',
            ],
        },
        rules: {},
    }],
    rules: {},
}
