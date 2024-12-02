const express = require('express')
const app = express()
const port = process.env.PORT || 5000

// dotenv 불러오기
require("dotenv").config();
// 모듈 불러오기
const mailer = require('./mailer.js');

// 메일 전송 라우트
app.post("/mail", (req, res) => {
  const { yourname, youremail, yoursubject, yourmessage } = req.body.data;

  mailer(yourname, youremail, yoursubject, yourmessage)
    .then((response) => {
      if (response === "success") {
        res.status(200).json({
          status: 'Success',
          code: 200,
          message: 'Message Sent Successfully!'
        })
    } else {
      res.json({
        status: 'Fail',
        code: response.code
      })
    }
  })
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})