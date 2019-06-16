module.exports = () => ({
  plugins: [
    require('postcss-import'),
    require('postcss-preset-env')({
      stage: 0
    }),
    require('tailwindcss'),
    require('autoprefixer')
  ]
})
