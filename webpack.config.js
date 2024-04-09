const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    entry: {
        editor: "./ClientAssets/TypeScript/edit.tsx",
        runner: "./ClientAssets/TypeScript/run.tsx"
    },
    output: {
        library: {
            name: 'SurveyJS[name]',
            type: 'var'
        },
        path: path.resolve(__dirname, "./wwwroot/static"),
        publicPath: "/static/",
        filename: "[name].js"
    },
    resolve: { extensions: [".ts", ".js", ".jsx", ".tsx"] },
    module: {
        rules: [
            {
                test: /\.ts|\.tsx$/,
                use: [{ loader: "babel-loader", options: { "presets": ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"] } }]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: false,
                        },
                    },
                ],
            },
            {
                test: /\.s(c|a)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: false,
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: false,
                        },
                    },
                ],
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: "[name].css" })
    ],
};