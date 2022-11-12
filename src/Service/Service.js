import React from "react";
import "./Service.css";
const education = [
  {
    heading: "Web Design",
    title:
      "Lorem Ipsum is simply dummy text of the printing typesetting industry. Lorem Ipsum has been the industry'sstandard",
  },
  {
    heading: "SEO",
    title:
      "Lorem Ipsum is simply dummy text of the printing typesetting industry. Lorem Ipsum has been the industry'sstandard",
  },
  {
    heading: "Web Development",
    title:
      "Lorem Ipsum is simply dummy text of the printing typesetting industry. Lorem Ipsum has been the industry'sstandard",
  },
  {
    heading: "Web Design",
    title:
      "Lorem Ipsum is simply dummy text of the printing typesetting industry. Lorem Ipsum has been the industry'sstandard",
  },
  {
    heading: "Web Design",
    title:
      "Lorem Ipsum is simply dummy text of the printing typesetting industry. Lorem Ipsum has been the industry'sstandard",
  },
  {
    heading: "Web Design",
    title:
      "Lorem Ipsum is simply dummy text of the printing typesetting industry. Lorem Ipsum has been the industry'sstandard",
  },
];
const Service = () => {
  return (
    <>
      <div className="vg-page page-service" id="services">
        <h1 className="text-center wow fadeInUp">Services</h1>
        <div className="container">
          <div className="row">
            {education.map((info) => {
              const { heading, title } = info;
              return (
                <div className="col-md-6 col-lg-4 wow fadeInUp">
                  <div className="card card-body">
                    <div className="iNameconic">
                      <span className="ti-layout"></span>
                    </div>
                    <h4 className="fg-theme">{heading}</h4>
                    <p>{title}</p>
                    <a href="#" className="btn btn-theme btn-rounded">
                      Read More
                    </a>
                  </div>
                </div>
              );
            })}
            ;
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
