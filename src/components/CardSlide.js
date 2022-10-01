import React from "react";

const CardSlide = ({ num }) => {
  return (
    <div className="card__body">
      <div className="card__body--heading">
        <h5>Project {num}</h5>
        <p>4, 245 commits</p>
      </div>
      <div className="card__body--main">
        <div className="card__body--main-content">
          <p className="about__text--top">/**</p>
          <p className="about__text--description">
            * consectetur sint veniam, corrupti consequatur <br />* ipsa labore
            nobis eveniet,
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
  );
};

export default CardSlide;
