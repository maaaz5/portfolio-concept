import React, { useEffect } from "react";
import gsap from "gsap";
import CardSlide from "../components/CardSlide";

const HelloScreen = () => {
  useEffect(() => {
    const divs = document.querySelectorAll(".card__body");
    gsap.set(divs[0], { y: 100, opacity: 0 });
    gsap.set(divs[2], { y: 100, opacity: 0 });
    var tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 3,
      defaults: { duration: 3, delay: 3 },
    });

    tl.add("one")
      .to(divs[0], { y: 100, x: 0, opacity: 0, scale: 0.8 }, "one")
      .to(divs[1], { y: -100, x: 0, opacity: 0, scale: 0.8 }, "one")
      .to(divs[2], { y: 0, x: 0, opacity: 1, scale: 1 }, "one")
      .add("two")
      .to(divs[0], { y: 0, x: 0, opacity: 1, scale: 1 }, "two")
      .to(divs[1], { y: 100, x: 0, opacity: 0, scale: 0.8 }, "two")
      .to(divs[2], { y: -100, x: 0, opacity: 0, scale: 0.8 }, "two")
      .add("three")
      .to(divs[0], { y: -100, x: 0, opacity: 0, scale: 0.8 }, "three")
      .to(divs[1], { y: 0, x: 0, opacity: 1, scale: 1 }, "three")
      .to(divs[2], { y: 100, x: 0, opacity: 0, scale: 0.8 }, "three");
  }, []);

  return (
    <section className="screen hello__screen">
      <div className="row u-width-100">
        <div className="col-6 vertical-center-col">
          <div className="hello__screen--text">
            <p className="paragraph">Hello! I am</p>
            <h1 className="heading-primary--main heading-primary">
              Jose Mourinho
            </h1>
            <h3 className="heading-primary--sub ">{">"} Front-end developer</h3>
          </div>
        </div>
        <div className="col-6 vertical-center-col ">
          <div className="hello__screen--slider">
            <CardSlide num={1} />
            <CardSlide num={2} />
            <CardSlide num={3} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelloScreen;
