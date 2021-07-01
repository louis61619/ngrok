const ngrok = require('ngrok')

ngrok.connect(3000).then(res => {
  console.log(res)
});