const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = (env) => {
    return {
        entry: {
            [`lauant-theme`]: [
                path.resolve(__dirname, `src/js`, "index.js"),
                path.resolve(__dirname, `src/sass`, "app.scss"),
            ],
        },
        output: {
            publicPath: `dist/`,
            chunkFilename: "chunk.[name].js",
            path: path.resolve(__dirname, `dist/`),
        },
        plugins: [
            new MiniCssExtractPlugin({
                attributes: {
                    id: "target",
                    "data-target": "example",
                },
            }),
        ],
        module: {
            rules: [
                {
                    test: /\.(png|jp(e*)g|gif)$/,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                name: "images/[hash]-[name].[ext]",
                            },
                        },
                    ],
                },
                {
                    test: /\.svg$/,
                    use: ["@svgr/webpack"],
                },
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                    },
                },
                {
                    test: /\.s[ac]ss|.css$/i,
                    use: [
                        // Creates `style` nodes from JS strings
                        MiniCssExtractPlugin.loader,
                        // Translates CSS into CommonJS
                        "css-loader",
                        // Compiles Sass to CSS
                        "sass-loader",
                        {
                            loader: "sass-loader",
                            options: {
                                sassOptions: {
                                    indentWidth: 4,
                                    includePaths: [
                                        "node_modules/foundation-sites/scss",
                                    ],
                                },
                            },
                        },
                    ],
                },
            ],
        },
        resolve: {
            extensions: [".js", ".jsx"],
        },
    };
};
