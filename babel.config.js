module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@components': './src/components',
          '@screens': './src/screens',
          '@routes': './src/routes',
          '@assets': './src/assets',
          '@theme': './src/theme',
          '@store': './src/store',
          '@util': './src/util',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
