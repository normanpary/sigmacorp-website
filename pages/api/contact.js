import nodemailer from 'nodemailer'

export default function (req, res) {
  /*let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: 587,
    host: 'smtp.sendgrid.net',
    auth: {
      user: 'apikey',
      pass: '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',
    },
    
  })
  const mailData = {
    from: 'marketing@sigmacorp.com.bo',
    to: 'normanpary@gmail.com',
    subject: `Message From ${req.body.name}`,
    text: req.body.message,
    html:  `<div>${req.body.message}</div>`
   }
   transporter.sendMail(mailData, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info)
  })
  res.status(200)*/

  console.log(req.body)
}