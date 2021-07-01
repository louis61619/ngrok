const express = require('express')
// const { exec } = require('child_process')
const ngrok = require('ngrok')

const app = express()


app.use('/', (req, res) => {
  res.end('Hello Ngrok')
})

app.listen(3000, () => {
  console.log('3000')
  ngrok.connect(3000).then(res => {
    console.log(res)
  });
})


// 使用命令行執行自訂命令並壓縮輸出
// exec('./ngrok -config=ngrok.yml -log=stdout > /dev/null start ngrok-api',(err, stdout, stderr) => {
//   if (err) {
//     reject(err);
//     return;
//   }
//   // console.log(stdout.replace('\n', ''));
//   // console.log(stderr);
//   // resolve();
// })