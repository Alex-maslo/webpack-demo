const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: path.join(__dirname, "dist"), // Указываем, где будет находиться статический контент
    compress: true, // Включаем сжатие
    port: 9000, // Порт, на котором будет работать сервер
    open: true, // Открывать браузер при старте сервера
  },
};
