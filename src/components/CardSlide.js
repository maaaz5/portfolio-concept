import React from "react";

const CardSlide = ({ data }) => {
  return (
    <div className="card__body">
      <div className="card__body--heading">
        <h5>Project {data.id}</h5>
        <p>{data.commits} commits</p>
      </div>
      <div className="card__body--main">
        <div className="card__body--main-content">
          <p className="about__text--top">/**</p>
          <p className="about__text--description">{data.short_description}</p>

          <p className="about-text_bottom">*/</p>
        </div>
        <div className="card__body--main-footer">
          <a href={data.projectLink}>see the project</a>
        </div>
      </div>
    </div>
  );
};

export default CardSlide;
