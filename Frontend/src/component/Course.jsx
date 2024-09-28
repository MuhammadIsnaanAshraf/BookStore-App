import React, { useState, useEffect } from "react";
// import list from "../../public/list.json";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import axios from "axios";

function Course() {
  const [Book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:3001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className="min-h-screen pt-32 max-w-screen-2xl container mx-auto md:px-10 px-4 dark:bg-slate-900 dark:text-white">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold text-center">
            Lorem ipsum, dolor sit consectetur
            <span className="text-pink-500"> Lorem.</span>
          </h1>
        </div>
        <div className="text-center">
          <p className="text-center mt-10 mb-8 lg:px-24 ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Recusandae, dolorum commodi. Blanditiis maiores, quaerat itaque iure
            voluptatum et? Facilis facere at exercitationem magnam perspiciatis
            nam ab molestias alias perferendis quisquam?Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Vero, facilis.
          </p>
          <Link to="/">
            <button className="text-white bg-pink-500 rounded-lg py-2 px-3 text-lg mb-8 hover:bg-pink-600 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Book.map((item) => {
            return <Cards key={item.id} item={item} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Course;
