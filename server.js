var path = require('path');
let express = require('express');
let app = express();
let port = 8000;

//通过localhost可以访问项目文件夹下的所有文件，等于动态为每个静态文件创建了路由
app.use('/', express.static(path.join(__dirname, '/dist')))

app.listen(port, function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://localhost:' + port);
});
