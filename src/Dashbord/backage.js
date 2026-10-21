import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextSlide, previousSlide, showSlide } from "./rtk";



const Backage = () => {
  const dispatch = useDispatch();

  //emeplement text in jsx

  const index = useSelector((state) => state.slider.index);
  const textslides = useSelector((state) => state.slider.textslides);
  const currenttextslides = textslides[index];

  //emeplement img in jsx

  const currentindex = useSelector((state) => state.slider.currentindex);
  const slides = useSelector((state) => state.slider.slides);
  const currentSlide = slides[currentindex];

  return (
    <>
      <div id="home">
        <div id="container">
          <div id="leftimg">
            <img src={currentSlide} />
          </div>

          <div id="rightimg">
            {" "}
            <div id="about">
              <div id="document">{currenttextslides}</div>

              <div
                onClick={() => dispatch(showSlide())}
                id="btn"
                style={{
                  marginTop: "15px",
                }}
              >
                <p
                  style={{
                    letterSpacing: "6px",
                    color: "#9ca3af",
                    fontSize: "13px",
                    display: "inline",
                    marginRight: "10px",
                  }}
                >
                  SHOP NOW
                </p>
                <img
                  src="images/icon-arrow.svg"
                  style={{ width: "40px", color: "#9ca3af" }}
                />
              </div>
            </div>
            <div id="press">
              <div id="leftarrow" onClick={() => dispatch(previousSlide())}>
                <img src="images/icon-angle-left.svg" />
              </div>
              <div id="rightarrow" onClick={() => dispatch(nextSlide())}>
                <img src="images/icon-angle-right.svg" />
              </div>
            </div>
          </div>
        </div>
        <div id="base">
          <div id="first">
            <img src="images/image-about-dark.jpg" />
          </div>
          <div id="second">
            <div id="text">
              <h5 style={{ letterSpacing: "4px", marginBottom: "10px" }}>
                ABOUT OUR FORNITURE
              </h5>
              <p style={{ color: "#9ca3af" }}>
                Our multifunctional collection blends design and function to
                suit your individual taste.Make each room unique,orpick a
                cohesive theme that best expressyour interests and what inspires
                you.Find the furniture pieces you need,from
                traditionaltocontemporarystylesor anythinginbetween Product
                specialists are cvailable to help you create your dream space.
              </p>
            </div>
          </div>
          <div id="third">
            <img src="images/image-about-light.jpg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Backage;
