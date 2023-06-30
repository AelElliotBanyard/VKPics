"use client";
import Slider from "@/components/Slider";
import { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const page = () => {
  const gallery = [
    {
      image: "./img/gallery/1.jpg",
      title: "Two traffic cadets on crossing at day",
    },
    {
      image: "./img/gallery/2.jpg",
      title: "One traffic cadet on crossing at day",
    },
    {
      image: "./img/gallery/3.jpg",
      title: "One traffic cadet on crossing at night with blured cars",
    },
    {
      image: "./img/gallery/4.jpg",
      title: "Crossing at night",
    },
    {
      image: "./img/gallery/5.jpg",
      title: "One traffic cadet on crossing at night",
    },
    {
      image: "./img/gallery/6.jpg",
      title: "One traffic cadet standing in front of car at night",
    },
  ];
  const [galleryCurrent, setGalleryCurrent] = useState(0);
  return (
    <div className="work">
      <h1 className="work__title">My Work</h1>
      <div className="work__section">
        <div className="work__gallery">
          {gallery.map((item, index) => {
            return (
              <div className="work__gallery__item">
                <img
                  src={item.image}
                  alt={item.title}
                  className={
                    galleryCurrent === index
                      ? " work__gallery__image block "
                      : " hidden "
                  }
                />
                <p className="work__gallery__image__text">{item.title}</p>
              </div>
            );
          })}
          <div className="work__gallery__buttons">
            <button
              className="work__gallery__button__left"
              onClick={() => {
                if (galleryCurrent === 0) {
                  setGalleryCurrent(gallery.length - 1);
                } else {
                  setGalleryCurrent(galleryCurrent - 1);
                }
              }}
            >
              <AiOutlineLeft />
            </button>
            <button
              className="work__gallery__button__right"
              onClick={() => {
                if (galleryCurrent === gallery.length - 1) {
                  setGalleryCurrent(0);
                } else {
                  setGalleryCurrent(galleryCurrent + 1);
                }
              }}
            >
              <AiOutlineRight />
            </button>
          </div>
        </div>
      </div>
      <div className="work__section">
        <Slider
          img1="./img/slider/slider1Before.jpg"
          img2="./img/slider/slider1After.jpg"
        />
      </div>
      <div className="work__section">
        <Slider
          img1="./img/slider/slider2Before.jpg"
          img2="./img/slider/slider2After.jpg"
        />
      </div>
    </div>
  );
};

export default page;
