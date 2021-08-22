import React, { useState } from "react"
import Layout from "../components/layout"
import BackButton from "../components/backButton"
import { Helmet } from "react-helmet"

import { GatsbyImage } from "gatsby-plugin-image"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons"

import { graphql } from "gatsby"

const ContactPage = ({ data }) => {
  const [value, setValue] = useState({})

  const [message, setMessage] = useState(``)

  const [messageItem, setMessageItem] = useState(``)

  const [isLoading, setIsLoading] = useState(false)

  function handleChange(e) {
    value[e.target.id] = e.target.value
    setMessage(``)
    setMessageItem(``)
    setValue({ ...value })
  }

  function onFormSubmit(e) {
    e.preventDefault()
    setIsLoading(true)

    window.grecaptcha.ready(function () {
      window.grecaptcha
        .execute("6Ldcbf0bAAAAAAZ_IAdIJpdi2vncOrfVbMahJk08", {
          action: "submit",
        })
        .then(function (token) {
          const body = {
            token: token,
            ...value,
          }
          JSON.stringify(body)
          fetch("/api/form", {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(body), // body data type must match "Content-Type" header
          })
            .then(res => res.json())
            .then(json => {
              if (json.item === "success") {
                setValue({})
              }
              setMessage(json.message)
              setMessageItem(json.item)
              setIsLoading(false)
            })
            .catch(err => console.log(err))
        })
        .catch(err => {
          console.log(err)
          setIsLoading(false)
          setMessage("Captcha error. Please try again.")
          setMessageItem("Fail")
        })
    })
  }

  return (
    <>
      <Helmet>
        <script src="https://www.google.com/recaptcha/api.js?render=6Ldcbf0bAAAAAAZ_IAdIJpdi2vncOrfVbMahJk08"></script>
      </Helmet>
      <BackButton />
      <Layout
        pageTitle={data.page.title}
        heroImage={data.page.heroImage.gatsbyImageData}
        className="page-wrapper"
      >
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-half">
                <div
                  className="main-text"
                  dangerouslySetInnerHTML={{
                    __html: data.page.mainText.childMarkdownRemark.html,
                  }}
                />
                <form className="contact-form main-text">
                  <div className="field">
                    <label className="label">Name</label>
                    <div className="control has-icons-left">
                      <input
                        id="name"
                        className="input"
                        type="text"
                        placeholder="Name"
                        value={value[`name`] || ``}
                        onChange={handleChange}
                      />
                      <span className="icon is-small is-left">
                        <FontAwesomeIcon icon={faUser} />
                      </span>
                      <p
                        className={
                          messageItem === "name" ? "help is-danger" : "hidden"
                        }
                      >
                        {message}
                      </p>
                    </div>
                  </div>

                  <div className="field">
                    <label className="label">Email</label>
                    <div className="control has-icons-left">
                      <input
                        id="email"
                        className="input"
                        type="text"
                        placeholder="Email"
                        value={value[`email`] || ``}
                        onChange={handleChange}
                      />
                      <span className="icon is-small is-left">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </span>
                      <p
                        className={
                          messageItem === "email" ? "help is-danger" : "hidden"
                        }
                      >
                        {message}
                      </p>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Message</label>
                    <div className="control">
                      <textarea
                        id="message"
                        className="textarea"
                        placeholder="Message"
                        value={value[`message`] || ``}
                        onChange={handleChange}
                      ></textarea>
                      <p
                        className={
                          messageItem === "message"
                            ? "help is-danger"
                            : "hidden"
                        }
                      >
                        {message}
                      </p>
                    </div>
                  </div>

                  <div className="field is-grouped">
                    <div className="control">
                      <button
                        className={
                          isLoading
                            ? "button is-link is-loading"
                            : "button is-link"
                        }
                        onClick={e => onFormSubmit(e)}
                        data-action="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                  <p
                    className={
                      messageItem === "success" ? "help is-success" : "hidden"
                    }
                  >
                    {message}
                  </p>
                  <p
                    className={
                      messageItem === "fail" ? "help is-danger" : "hidden"
                    }
                  >
                    {message}
                  </p>
                </form>
                <div className="main-text" style={{ fontSize: "0.8em" }}>
                  This site is protected by reCAPTCHA and the Google{" "}
                  <a href="https://policies.google.com/privacy">
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a href="https://policies.google.com/terms">
                    Terms of Service
                  </a>{" "}
                  apply.
                </div>
              </div>
              <div className="column">
                <figure className="image">
                  <GatsbyImage
                    image={data.page.sidebarImage.gatsbyImageData}
                    alt={data.page.sidebarImage.title}
                    objectFit="contain"
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default ContactPage

export const pageQuery = graphql`
  query {
    page: contentfulPage(slug: { eq: "contact" }) {
      id
      title
      subTitle
      heroImage {
        gatsbyImageData
      }
      sidebarImage {
        gatsbyImageData
        title
      }
      mainText {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
