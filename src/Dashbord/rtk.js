import { createSlice } from "@reduxjs/toolkit";
import React from "react";

//fun text one
const textone = () => {
  return (
    <>
      <div id="document">
        <h1 style={{ fontWeight: "bold", marginBottom: "6px" }}>
          Discover innovative ways to decorate
        </h1>
        <p style={{ color: "#9ca3af" }}>
          We provide unmatched quality, comfort, and style for property owners
          across the country. Our experts combine form and function in bringing
          your vision to life.Create a room in your own style with our
          collection and make your property a reflection of you and what you
          love.
        </p>
      </div>
    </>
  );
};
//fun text two
const textsecond = () => {
  return (
    <>
      <div id="document">
        <h1 style={{ fontWeight: "bold", marginBottom: "6px" }}>
          We are available all across the globe
        </h1>
        <p style={{ color: "#9ca3af" }}>
          With stores all over the world, it's easy for you to find furniture
          for your home or place of business. Locally, we're in most major
          cities throughout the country. Find the branch nearest you using our
          store locator. Any questions?Don't hesitate to contact us today.
        </p>
      </div>
    </>
  );
};

//fun text three
const textthree = () => {
  return (
    <>
      <div id="document">
        <h1 style={{ fontWeight: "bold", marginBottom: "6px" }}>
          Manufactured with the best materials
        </h1>
        <p style={{ color: "#9ca3af" }}>
          Ourmodernfurniturestoreprovideahighlevelofquality.Our company has
          invested in advanced technology to ensure that every product is made
          as perfect and as consistent as possible.With three decades of
          experience in this industry,we understandwhat customers wantfor their
          home and office.
        </p>
      </div>
    </>
  );
};

const initialState = {
  //for knowing number text
  index: 0,
  //for knowing array text
  textslides: [textone(), textsecond(), textthree()],

  //for knowing number img

  currentindex: 0,

  //for knowing array img
  slides: [
    "images/desktop-image-hero-1.jpg",

    "images/desktop-image-hero-2.jpg",

    "images/desktop-image-hero-3.jpg",
  ],
};

export const sliderSlice = createSlice({
  name: "slider",
  initialState,
  reducers: {
    // for move next img
    nextSlide: (state) => {
      state.currentindex++;
      if (state.currentindex === state.slides.length) {
        state.currentindex = 0;
      }
    },

    // for move  previous img
    previousSlide: (state) => {
      state.currentindex--;
      if (state.currentindex < 0) {
        state.currentindex = state.slides.length - 1;
      }
    },
    // for move text
    showSlide: (state) => {
      state.index++;
      if (state.index === state.slides.length) {
        state.index = 0;
      }
    },
  },
});

export const { nextSlide, previousSlide, showSlide } = sliderSlice.actions;

export default sliderSlice.reducer;
