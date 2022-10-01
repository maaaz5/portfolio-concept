import React from "react";

const ProjectsScreen = () => {
  return (
    <div className="screen">
      <div className="row u-width-100">
        <div className="col-12">
          <h1 className="heading-primary heading-primary--sub u-marginBottom-big ">
            // Top projects
          </h1>
        </div>

        <div className="row u-width-100 u-gap-medium u-between">
          <div className="col-5">
            <div className="card">
              <div className="card__body">
                <div className="card__body--heading">
                  <h5>Project1</h5>
                  <p>4, 245 commits</p>
                </div>
                <div className="card__body--main">
                  <div className="card__body--main-content">
                    <p className="about__text--top">/**</p>
                    <p className="about__text--description">
                      * consectetur sint veniam, corrupti consequatur <br />*
                      ipsa labore nobis eveniet,
                      <br />* ipsa labore nobis eveniet,
                      <br />
                    </p>

                    <p className="about-text_bottom">*/</p>
                  </div>
                  <div className="card__body--main-footer">
                    <a href="#">see the project</a>
                  </div>
                </div>
              </div>
              <div className="card__description">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  quod saepe doloremque alias ea sint autem quia reiciendis
                  veniam deserunt!
                </p>
                <a href="#" className="btn">
                  Check in GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="col-5">
            <div className="card">
              <div className="card__body">
                <div className="card__body--heading">
                  <h5>Project1</h5>
                  <p>4, 245 commits</p>
                </div>
                <div className="card__body--main">
                  <div className="card__body--main-content">
                    <p className="about__text--top">/**</p>
                    <p className="about__text--description">
                      * consectetur sint veniam, corrupti consequatur <br />*
                      ipsa labore nobis eveniet,
                      <br />* ipsa labore nobis eveniet,
                      <br />
                    </p>

                    <p className="about-text_bottom">*/</p>
                  </div>
                  <div className="card__body--main-footer">
                    <a href="#">see the project</a>
                  </div>
                </div>
              </div>
              <div className="card__description">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  quod saepe doloremque alias ea sint autem quia reiciendis
                  veniam deserunt!
                </p>
                <a href="#" className="btn">
                  Check in GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsScreen;
