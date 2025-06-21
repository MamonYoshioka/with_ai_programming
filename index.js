// index.js
const express = require('express');
const app = express();
const port = 3000;

// ルートエンドポイント
app.get('/', (req, res) => {
  res.send('Hello, World! This is your Express app.');
});

// サーバーの起動
app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});