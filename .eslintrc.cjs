module.exports = {
    parser: '@typescript-eslint/parser',
    extends: ['airbnb', 'airbnb/hooks', 'airbnb-typescript', 'prettier'],
    plugins: ['prettier'],
    parserOptions: {
        project: './tsconfig.json',
    },
    rules: {
        'react/react-in-jsx-scope': 'off',
        'prettier/prettier': ['warn'],
        'import/no-extraneous-dependencies': ['error'],
        'object-curly-spacing': 'warn',
        'import/prefer-default-export': 'off',
        'quote-props': ['warn', 'consistent-as-needed'],
        'react/require-default-props': [
            'error',
            {
                classes: 'defaultProps',
                functions: 'defaultArguments',
            },
        ],
    },
};
