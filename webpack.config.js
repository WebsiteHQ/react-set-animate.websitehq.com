module.exports = {
  module: {
    loaders: [
      {
        test: /\.(css|scss|sass)$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
};
