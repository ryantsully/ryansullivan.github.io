const path = require('path');

module.exports = {
    entry: './frontend/src/index.js',  // Adjust this path to point to your entry file
    output: {
        path: path.resolve(__dirname),  // Output path (root directory here)
        filename: 'bundle.js',          // Output file name
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react'],
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    mode: 'development',  // Or 'production' for a minified build
};
