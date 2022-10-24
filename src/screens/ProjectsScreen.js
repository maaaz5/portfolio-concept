import React from "react";
import { slides } from "../data/Slides";

const ProjectsScreen = () => {
  return (
    <div className="screen">
      <div className="row u-width-100">
        <div className="col-12">
          <h1 className="heading-primary heading-primary--sub u-marginBottom-big ">
            // Top Projects
          </h1>
        </div>

        <div className="row-two-cols">
          {slides.map((slide) => (
            <div className="col-5">
              <div className="card">
                <div className="card__body">
                  <div className="card__body--heading">
                    <h5>Project {slide.id}</h5>
                    <p>{slide.commits} commits</p>
                  </div>
                  <div className="card__body--main">
                    <div className="card__body--main-content">
                      <p className="about__text--top">/**</p>
                      <p className="about__text--description">
                        {slide.short_description}
                      </p>

                      <p className="about-text_bottom">*/</p>
                    </div>
                    <div className="card__body--main-footer">
                      <a href={slide.projectLink}>see the project</a>
                    </div>
                  </div>
                </div>
                <div className="card__description">
                  <p>{slide.long_description}</p>
                  <a href={slide.projectLink} className="btn">
                    Check in GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsScreen;
