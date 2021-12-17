module.exports = {
    pluginOptions: {
        electronBuilder: {
            builderOptions: {
                // options placed here will be merged with default configuration and passed to electron-builder
            },

            //指定build输出的目录，默认是dist_electron
            // outputDir: 'electron-builder-output-dir'
        }
    }
}
