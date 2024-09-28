import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import list from "../../public/list.json";
import Cards from "./Cards";
import { useState, useEffect } from "react";

function Freebook() {
  const [Book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:3001/book");
        const filterData = res.data.filter((data) => {
          return data.category === "free";
        });
        console.log(filterData);
        setBook(filterData);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  // const freeBook = list.filter((data) => {
  //   return data.category === "free";
  // });

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  // console.log(freeBook);
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-12 px-4 dark:bg-slate-900 dark:text-white ">
        <div>
          <h1 className="font-bold text-xl mb-2">Free Offered Courses</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            quibusdam aut quae voluptatibus quas voluptas repellendus facilis,
            similique inventore laborum.
          </p>
        </div>
        <div className="slider-container">
          <Slider {...settings}>
            {Book.map((item) => {
              return <Cards item={item} key={item.id} />;
            })}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Freebook;
