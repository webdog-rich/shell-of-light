import fetch from "node-fetch"

require("dotenv").config()

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
  console.log(process.env.RE_SECRET_KEY)

  //check recaptcha
  fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `secret=${process.env.RE_SECRET_KEY}&response=${req.body.token}`,
  })
    .then(res => res.json())
    .then(json => {
      if (json.success === true) {
        return res.status(200).json({
          success: true,
          message: "Your message has been sent",
          item: "success",
        })
      } else {
        return res.status(422).json({
          success: false,
          message: "Captcha failed. Please try again",
          item: "fail",
        })
      }
    })
}
