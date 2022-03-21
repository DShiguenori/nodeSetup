module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				targets: {
					node: 'current',
				},
			},
		],
		'@babel/preset-typescript',
	],
	plugins: [
		[
			'module-resolver',
			{
				alias: {
					'@config': './src/logic/config',
					'@modules': './src/logic/modules',
					'@mocks': './src/logic/mocks',

					'@controllers': './src/server/controllers',
					'@repository': './src/server/repository',
					'@routes': './src/server/routes',
				},
			},
		],
	],
	ignore: ['**/*.test.ts', '**/*.mock.ts'],
};
