
// module.exports = {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// }

module.exports = {
  plugins: [
    require('@tailwindcss/postcss')({
      config: './tailwind.config.js',
    }),
    require('autoprefixer'),
  ],
}

