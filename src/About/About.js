import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import "./About.css";
import card from "../images/testimonials/testimonial-2.jpg";

const About = () => {
  return (
    <>
      <section id="about" class="about-mf sect-pt4 route">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="box-shadow-full">
                <div class="row">
                  <div class="col-md-6">
                    <div class="row">
                      <div class="col-sm-6 col-md-5">
                        <div class="about-img">
                          <img
                            src={card}
                            class="img-fluid rounded b-shadow-a"
                            alt=""
                          ></img>
                        </div>
                      </div>
                      <div class="col-sm-6 col-md-7">
                        <div class="about-info">
                          <p>
                            <span class="title-s">Name: </span>
                            <span>Hassan Azeem</span>
                          </p>
                          <p>
                            <span class="title-s">Profile: </span>
                            <span>Full Stack Developer</span>
                          </p>
                          <p>
                            <span class="title-s">Email: </span>
                            <span>azeemhassan621@gmail.com</span>
                          </p>
                          <p>
                            <span class="title-s">Phone: </span>
                            <span>00000000</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="row skills-content">
                      <div class="skills">
                        <div className="my-2">
                          <span class="skill">
                            HTML <i class="val">100%</i>
                          </span>

                          <ProgressBar variant="info" animated now={100} />
                        </div>
                        <div className="my-3">
                          <span class="skill">
                            CSS <i class="val">90%</i>
                          </span>
                          <ProgressBar variant="info" animated now={90} />
                        </div>
                        <div className="my-3">
                          <span class="skill">
                            JS <i class="val">70%</i>
                          </span>
                          <ProgressBar variant="info" animated now={70} />
                        </div>
                        <div className="my-3">
                          <span class="skill">
                            React <i class="val">40%</i>
                          </span>
                          <ProgressBar variant="info" animated now={40} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="about-me pt-4 pt-md-0">
                      <div class="title-box-2">
                        <h5 class="title-left">About me</h5>
                      </div>
                      <p class="lead">
                        Curabitur non nulla sit amet nisl tempus convallis quis
                        ac lectus. Curabitur arcu erat, accumsan id imperdiet
                        et, porttitor at sem. Praesent sapien massa, convallis a
                        pellentesque nec, egestas non nisi. Nulla porttitor
                        accumsan tincidunt.
                      </p>
                      <p class="lead">
                        Mauris blandit aliquet elit, eget tincidunt nibh
                        pulvinar a. Vivamus suscipit tortor eget felis porttitor
                        volutpat. Vestibulum ac diam sit amet quam vehicula
                        elementum sed sit amet dui. porttitor at sem.
                      </p>
                      <p class="lead">
                        Nulla porttitor accumsan tincidunt. Quisque velit nisi,
                        pretium ut lacinia in, elementum id enim. Nulla
                        porttitor accumsan tincidunt. Mauris blandit aliquet
                        elit, eget tincidunt nibh pulvinar a.
                      </p>
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

export default About;
