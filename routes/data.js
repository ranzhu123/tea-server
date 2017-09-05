var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database:'tea'
});
connection.connect();

function getNews(res) {
//查询
  connection.query('select * from `news`', function(err, rows, fields) {
    if (err) throw err;
    console.log('查询结果为: ', rows);
    res.json(rows.map(row => row.content));
  });
//关闭连接
}

function close() {
  connection.end();
}
/* GET users listing. */
router.get('/list', function(req, res, next) {
  getNews(res);
  // res.json(['冉猪你想干啥', '想吃狗屎吗', '还是大狗屎', '吃饱没']);
});

module.exports = router;
