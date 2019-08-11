const path = require('path');
module.exports = [
    {
        entry :'./src/main.js',
        mode: "development",
        output:{
            filename:'./library/js/main-bundle.js',
            path: path.resolve(__dirname, 'client')
        },
        node: {
            fs: "empty"
         }
    }
    // {
    //     entry :'./src/snake.js',
    //     mode: "development",
    //     output:{
    //         filename:'./library/js/snake-bundle.js',
    //         path: path.resolve(__dirname, 'client')
    //     },
    //     node: {
    //         fs: "empty"
    //     },
    //     externals: {
    //         uws: "uws"
    //     }
    // }
]