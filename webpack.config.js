const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    entry: {
        editor: "./ClientAssets/TypeScript/edit.tsx",
        runner: "./ClientAssets/TypeScript/run.tsx",
        dashboard: "./ClientAssets/TypeScript/dashboard.tsx",
        table: "./ClientAssets/TypeScript/table.tsx",
        pdf: "./ClientAssets/TypeScript/pdf.tsx",
    },
    output: {
        libraryTarget: 'module',
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
    experiments: {
        outputModule: true,
    }
};