const path = require('path')

module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@types': path.resolve(__dirname, 'src/types'),
            '@data': path.resolve(__dirname, 'src/data'),
            '@hoc': path.resolve(__dirname, 'src/hoc'),
            '@constants': path.resolve(__dirname, 'src/constants'),
        },
    },
}
