import fetch from "node-fetch"

require("dotenv").config()

const sgMail = require("@sendgrid/mail")

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export default function formHandler(req, res) {
  if (!req.body.name) {
    return res.status(422).json({
      success: false,
      message: "The name field is required",
      item: "name",
    })
  }

  if (!req.body.email) {
    return res.status(422).json({
      success: false,
      message: "The email field is required",
      item: "email",
    })
  }

  if (!req.body.message) {
    return res.status(422).json({
      success: false,
      message: "A message is required",
      item: "message",
    })
  }

  //check recaptcha
  fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `secret=${process.env.RE_SECRET_KEY}&response=${req.body.token}`,
  })
    .then(res => res.json())
    .then(json => {
      if (json.success === true) {
        const msg = {
          to: "richard@webdog.co.nz",
          from: "richard@webdog.co.nz", // Use the email address or domain you verified above
          subject: "New message from website",
          text: `${req.body.email}, \n ${req.body.name}, \n ${req.body.message}`,
          html: `<p>${req.body.email}</p><p>${req.body.name}</p><p>${req.body.message}</p>`,
        }

        sgMail.send(msg).then(
          () => {
            return res.status(200).json({
              success: true,
              message: "Your message has been sent",
              item: "success",
            })
          },
          error => {
            console.error(error)

            if (error.response) {
              console.error(error.response.body)
              return res.status(422).json({
                success: false,
                message: "Server Error",
                item: "fail",
              })
            }
          }
        )
      } else {
        return res.status(422).json({
          success: false,
          message: "Captcha failed. Please try again",
          item: "fail",
        })
      }
    })
}
