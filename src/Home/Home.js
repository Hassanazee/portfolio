import React from "react";
import "./home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import Navbar from "../Navbar/Navbar";
import images from "../images/logo/company_1.svg";
import photo from "../images/logo/company_2.svg";
import logo from "../images/logo/company_3.svg";
import random from "../images/logo/company_4.svg";
import randoms from "../images/testimonials/testimonials_1.jpg";
import snap from "../images/testimonials/testimonials_2.jpg";

const Home = () => {
  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <div className="setImages">
            <img
              id="bg-img"
              className="d-block w-100"
              src="https://wallpaperaccess.com/full/1102010.jpg"
            />
          </div>
          <Carousel.Caption>
            {/* <h3>Frontend webDeveloper</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="setImages">
            <img
              id="bg-img"
              className="d-block w-100"
              src="https://wallpaperaccess.com/full/796854.jpg"
              alt="Second slide"
            />
          </div>
          <Carousel.Caption>
            <h3>fullStack webDeveloper</h3>
            <p>Hassan Azeem</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="setImages">
            <img
              id="bg-img"
              className="d-block w-100"
              src="https://wallpaperaccess.com/full/796843.png"
              alt="Third slide"
            />
          </div>
          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div class="vg-page page-client">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-lg-4 col-xl-3 item">
              <div class="img-place wow fadeInUp">
                <img src={images} alt=""></img>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3 item">
              <div class="img-place wow fadeInUp">
                <img src={photo} alt="" />
              </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3 item">
              <div class="img-place wow fadeInUp">
                <img src={logo} alt="" />
              </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3 item">
              <div class="img-place wow fadeInUp">
                <img src={random} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="vg-page page-testimonial">
        <div class="container">
          <h1 class="text-center fw-normal wow fadeInUp">
            What Clients are Saying
          </h1>
          <div class="row justify-content-center mt-5 wow fadeInUp">
            <div class="col-md-9">
              <div class="owl-carousel testi-carousel">
                <div class="item">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="img-place">
                        <img src={randoms} alt="" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="caption">
                        <div class="testi-content">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered
                        </div>
                        <div class="testi-info">
                          <div class="thumb-profile">
                            <img src="" alt="" />
                          </div>
                          <div class="tagline">
                            <h5 class="mb-0">Satria Nugraha</h5>
                            <span class="text-muted">CEO Nutshell</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="img-place">
                        <img src={snap} alt="" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="caption">
                        <div class="testi-content">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Saepe natus expedita ab facilis ut, animi
                          explicabo amet. Voluptatibus possimus iste enim,
                          doloremque, fugiat accusamus nisi optio fugit ratione
                          expedita harum?
                        </div>
                        <div class="testi-info">
                          <div class="thumb-profile">
                            <img
                              src="../assets/img/testimonials/testimonials_2.jpg"
                              alt=""
                            />
                          </div>
                          <div class="tagline">
                            <h5 class="mb-0">Selena Arrini</h5>
                            <span class="text-muted">CEO BigTree</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
