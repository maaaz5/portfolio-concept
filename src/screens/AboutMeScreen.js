import React from "react";
import { useState, useRef } from "react";
import { useEffect } from "react";

const AboutMeScreen = () => {
  let arr = [];
  for (let index = 56; index < 70; index++) {
    arr.push(index);
  }

  function navHandler(e) {
    let lis = document.querySelectorAll(".sideNav__nav-item");
    let clicked = e.target.closest(".sideNav__nav-item");

    //checking if the clicked element already has the class "show"
    if (clicked.classList.contains("show")) {
      clicked.classList.remove("show");
    } else {
      //adding the class to the specif <li>
      lis.forEach((li) => li.classList.remove("show"));
      clicked.classList.add("show");
    }
  }

  return (
    <div className="screen">
      <div className="about">
        <div className="row">
          <div className="col-1 ">
            <p className="about__numbers">
              {arr.map((s, index) => (
                <span key={index} className="about__numbers--number">
                  {s}
                </span>
              ))}
            </p>
          </div>
          <div className="col-8 vertical-center-col">
            <div className="about__text">
              <p className="about__text--top">/**</p>
              <p className="about__text--description">
                * Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                <br /> * Optio quidem vel enim, recusandae quod accusantium{" "}
                <br /> * consectetur sint veniam, corrupti consequatur <br />*
                ipsa labore nobis eveniet,
                <br /> * exercitationem veritatis itaque quisquam quis similique{" "}
                <br />*<br /> * voluptatem voluptas eligendi. Delectus vel rerum{" "}
                <br />* placeat molestias, aperiam eaque provident,
                <br /> * qui itaque illum illo alias autem libero atque fugiat!
              </p>

              <p className="about-text_bottom">*/</p>
            </div>
          </div>
        </div>
      </div>

      <div className="sideNav">
        <h3 className="sideNav__heading">EXPLORER</h3>
        <ul className="sideNav__nav" onClick={navHandler}>
          <li className="sideNav__nav-item">
            <i class="fa-solid fa-chevron-right"></i> MY INTERESTS
          </li>
          <li className="sideNav__nav-item">
            <i class="fa-solid fa-chevron-right"></i>{" "}
            <i class="fa-solid fa-folder-closed sideNav__nav-item--1 "></i>{" "}
            React
          </li>

          <li className="sideNav__nav-item">
            <i class="fa-solid fa-chevron-right"></i>{" "}
            <i class="fa-solid fa-folder-closed sideNav__nav-item--2"></i> Node
          </li>

          <li className="sideNav__nav-item">
            <i class="fa-solid fa-chevron-right"></i>{" "}
            <i class="fa-solid fa-folder-closed sideNav__nav-item--3"></i>{" "}
            Express
            <ul className="sideNav__nav-item__nav">
              <li>
                <i class="fa-solid fa-file"></i> read articles
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMeScreen;
