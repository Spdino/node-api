const express = require('express')
bodyParser = require('body-parser')
app = express()
cors = require('cors')

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

let layout = require('./data/layout')
let comRenderData = require('./data/comRenderData')
let comData = require('./data/comData')


// render -----------------------
app.get('/layout', (req, res) => {
  let flag
  layout.forEach(item => {
    if (req.query.id == item.component) {
      flag = true
      res.send(item)
    }
  })
  if (!flag) {
    res.end('error:请求参数错误!')
  }
})

app.get('/comRenderData', (req, res) => {
  let flag
  comRenderData.forEach(item => {
    if (req.query.id == item.component) {
      flag = true
      res.send(item)
    }
  })
  if (!flag) {
    res.end('error:请求参数错误!')
  }
})

app.get('/comData', (req, res) => {
  res.send(comData)
})
// --------------------------------------



app.get('/user/info', function (req, res) {
  let data = {
    roles: ['admin'],
    name: 'admin',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'
  }
  if (req.query.token == 'admin') {
    res.send(data)
  } else {
    res.end('error:请求参数错误!')
  }
})

app.post('/user/login', function (req, res) {
  if (req.body.username !== 'admin') {
    res.send('登录账号不正确')
  } else if (req.body.password !== 'admin') {
    res.send('登录密码不正确')
  } else {
    let data = {
      token: 'admin'
    }
    res.send(data)
  }
})

app.post('/user/logout', function (req, res) {
  let data = {
    code: 20000,
    data: 'success'
  }
  res.send(data)
})


app.listen(8888, function () {
  console.log('server is start。。。')
});