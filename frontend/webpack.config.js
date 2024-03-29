const path = require("path");

module.exports = {
  // Entry file for your application
  entry: "./src/index.js",
  mode: "development",

  // Output file after bundling
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },

  // Module rules for loaders
  module: {
    rules: [
      // {
      //   loader: "babel-loader",
      //   test: /\.js$|jsx/,
      //   // exclude: /node_modules/,
      // },
      // Rule for handling images
      {
        test: /\.(png|jpe?g|gif)$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
      

      {
        test: /\.(sass|css|scss)$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: () => [require("autoprefixer")()],
            },
          },
          "sass-loader",
        ],
      },

      // Rule for handling CSS files
      // {
      //   test: /\.css$/i,
      //   use: ["style-loader", "css-loader"],
      // },
      // Rule for handling PNG files
      {
        test: /\.png$/,
        type: "asset/resource",
      },
    ],
  },

  // Other configurations as needed
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },

  // Dev server configuration if needed
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3000,
  },
};
