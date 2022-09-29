const path = require("path")
const CracoLessPlugin = require("craco-less")

const resolve = (pathname) => path.resolve(__dirname, pathname)

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
        },
    ],
    webpack: {
        alias: {
            "@": resolve("src"),
        },
    },
}
