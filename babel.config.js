module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@features': './src/features',
            '@assets': './src/assets',
            '@navigation': './src/navigation',
            '@navigators': './src/navigators',
            '@routes': './src/routes',
            '@components': './src/components',
            '@services': './src/core/services',
            '@hooks': './src/core/hooks',
            '@shared': './src/shared',
            '@core': './src/core',
            '@theme': './src/theme',
            '@config': './src/config',
          },
        },
      ],
    ],
  };
};
