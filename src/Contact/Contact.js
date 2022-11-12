import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const changeEmail = (e) => {
    setData({
      ...data,
      email: e.target.value,
    });
  };
  const changeName = (e) => {
    setData({
      ...data,
      name: e.target.value,
    });
  };
  const changeSubject = (e) => {
    setData({
      ...data,
      subject: e.target.value,
    });
  };
  const changeMessage = (e) => {
    setData({
      ...data,
      message: e.target.value,
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const register = {
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
    };
    axios
      .post("http://localhost:5000/api/v1", register)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(`404- Data couldn't saved due to reasons ${err}`);
      });
  };
  return (
    <>
      <section
        id="contact"
        class="paralax-mf footer-paralax bg-image sect-mt4 route"
      >
        <div class="overlay-mf"></div>
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="contact-mf">
                <div id="contact" class="box-shadow-full">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="title-box-2">
                        <h5 class="title-left">Send Message Us</h5>
                      </div>
                      <div>
                        <form
                          action="forms/contact.php"
                          method="post"
                          role="form"
                          class="php-email-form"
                        >
                          <div class="row">
                            <div class="col-md-12 mb-3">
                              <div class="form-group">
                                <input
                                  type="text"
                                  name="name"
                                  class="form-control"
                                  id="name"
                                  placeholder="Your Name"
                                  value={data.name}
                                  onChange={changeName}
                                  required
                                ></input>
                              </div>
                            </div>
                            <div class="col-md-12 mb-3">
                              <div class="form-group">
                                <input
                                  type="email"
                                  class="form-control"
                                  name="email"
                                  id="email"
                                  placeholder="Your Email"
                                  value={data.email}
                                  onChange={changeEmail}
                                  required
                                ></input>
                              </div>
                            </div>
                            <div class="col-md-12 mb-3">
                              <div class="form-group">
                                <input
                                  type="text"
                                  class="form-control"
                                  name="subject"
                                  id="subject"
                                  placeholder="Subject"
                                  value={data.subject}
                                  onChange={changeSubject}
                                  required
                                ></input>
                              </div>
                            </div>
                            <div class="col-md-12">
                              <div class="form-group">
                                <textarea
                                  class="form-control"
                                  name="message"
                                  rows="5"
                                  placeholder="Message"
                                  value={data.message}
                                  onChange={changeMessage}
                                  required
                                ></textarea>
                              </div>
                            </div>

                            <div class="col-md-12 text-center">
                              <Button
                                type="submit"
                                class="button button-a button-big button-rouded"
                                onClick={submitHandler}
                              >
                                Send Message
                              </Button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="title-box-2 pt-4 pt-md-0">
                        <h5 class="title-left">Get in Touch</h5>
                      </div>
                      <div class="more-info">
                        <p class="lead">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Facilis dolorum dolorem soluta quidem expedita
                          aperiam aliquid at. Totam magni ipsum suscipit amet?
                          Autem nemo esse laboriosam ratione nobis mollitia
                          inventore?
                        </p>
                        <ul class="list-ico">
                          <li>
                            <span class="bi bi-geo-alt"></span>Lahore
                          </li>
                          <li>
                            <span class="bi bi-phone"></span> 000000
                          </li>
                          <li>
                            <span class="bi bi-envelope"></span>
                            azeemhassan621@gmail.com
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
