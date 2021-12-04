const rules = require("./webpack.rules");

rules.push({
        test: /\.css$/,
        use: [{loader: "style-loader"}, {loader: "css-loader"}],
    },
    {
        test: /\.s[ac]ss$/i,
        use: [
            "style-loader",
            "css-loader",
            "sass-loader",
        ],
    },
    {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
            {
                loader: "file-loader",
            },
        ],
    },
);

module.exports = {
    // Put your normal webpack config below here
    module: {
        rules,
    },
};
