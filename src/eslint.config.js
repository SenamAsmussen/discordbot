const js = require('@eslint/js');

module.exports = [
	js.configs.recommended,
	{
		languageOptions: {
			ecmaVersion: 'latest',
			globals: {
				// Node.js globals
				require: 'readonly',
				module: 'readonly',
				process: 'readonly',
				__dirname: 'readonly',
				console: 'readonly',
				setTimeout: 'readonly',
				fetch: 'readonly',
			},
		},
		rules: {
			// Add custom rules here
			// Example: 'no-console': 'warn',
		},
	},
];