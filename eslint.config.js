import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';

export default [
    js.configs.recommended,

    {
        files: ['**/*.{js,ts}'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                document: 'readonly',
                window: 'readonly',
                console: 'readonly',
                process: 'readonly',
                module: 'readonly',
                require: 'readonly',
                __dirname: 'readonly',
                __filename: 'readonly',
            },
        },
        plugins: {
            '@typescript-eslint': typescript,
        },
        rules: {
            'no-console': 'warn',
            'no-debugger': 'error',
            'no-unused-vars': 'warn',
            'prefer-const': 'error',
            'no-var': 'error',
            '@typescript-eslint/no-unused-vars': [
                'error',
                { argsIgnorePattern: '^_' },
            ],
            '@typescript-eslint/no-explicit-any': 'warn',
        },
    },

    {
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            parser: typescriptParser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
        },
    },

    {
        ignores: [
            'node_modules/',
            'dist/',
            'coverage/',
            '*.min.js',
            '*.bundle.js',
            'public/',
            'vite.config.ts',
            '*.config.js',
            '*.config.ts',
            '**/*.vue', // Temporarily ignore Vue files until we fix the parser
        ],
    },
];
