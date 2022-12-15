/**
 * FileName: webpack 配置文件
 * Created Date: 2022-12-15 16:29:10
 * Author: 文初阳
 * -----
 * Last Modified: 2022-12-15 17:39:00
 * Modified By: 文初阳
 */
module.exports = {
    module: {
        rules: [
            {
                // tsx 文件的编译
                test: /\.tsx?$/,
                loader: "ts-loader"
            }
        ]
    }
};