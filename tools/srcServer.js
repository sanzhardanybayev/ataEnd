/* eslint-disable import/no-extraneous-dependencies,prefer-destructuring */
import express from 'express'
import compression from 'compression'
import pug from 'pug'
import path from 'path'
import webpack from 'webpack'
import open from 'open'
import nodemailer from 'nodemailer'
import bodyParser from 'body-parser'

import config from '../webpack.dev'


/* eslint-disable no-console */

const port = 3009
const app = express()

app.use(compression())

const compiler = webpack(config)
//  Here we are configuring express to use body-parser as middle-ware.

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'email'))

app.use(express.static(path.join(__dirname, 'email')))

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

app.use(require('webpack-hot-middleware')(compiler))


// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // secure:true for port 465, secure:false for port 587
  auth: {
    user: 'excelsior.contacts@gmail.com',
    pass: 'Excelsior567&^%'
  }
})

app.post('/sendemail', (req, res) => {

  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')

  const phone = req.body.phone
  const price = req.body.price
  const options = JSON.parse(req.body.options)


  const emailTemplate = pug.renderFile(path.join(__dirname, 'email/index.pug'), {
    phone,
    price,
    options
  })


  // setup email data with unicode symbols
  const mailOptions = {
    from: '"Tinki Winki 🎈" <excelsior.contacts@gmail.com>', // sender address
    to: 'dsanjar@rocketmail.com', // list of receivers
    subject: 'Заявка с сайта ✔', // Subject line
    text: 'New order', // plain text body
    html: emailTemplate // html body
  }

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error != null) {
      console.log(error)
      return false
    }
    res.sendStatus(200)
    console.log('Message %s sent: %s', info.messageId, info.response)
    return true

  })

  res.end('{"success" : "Sent Successfully", "status" : 200}')

})


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'))
})


app.listen(port, (err) => {
  if (err) {
    console.log(err)
  } else {
    open(`http://localhost:${port}`)
    console.log(process.version)
    console.log(`http://localhost:${port}`)
  }
})
