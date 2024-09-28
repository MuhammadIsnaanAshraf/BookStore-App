import React from "react";

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container px-4 md:w-[100%] md:mx-auto mt-10 flex flex-col-reverse sm:flex-row dark:bg-slate-900 dark:text-white">
        <div className="left mt-20 mb-10 pt-10 text-center sm:text-left lg:px-8">
          <h1 className="font-bold  md:text-4xl mb-8  ">
            Hello, Welcome here to learn something
            <span className="text-pink-500"> new everyday!!!</span>
          </h1>
          <p className="my-6 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            dignissimos recusandae architecto exercitationem esse provident,
            consequuntur Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Ut, odit.
          </p>

          <label
            style={{ border: "1px solid" }}
            className="input w-auto sm:w-3/4 input-bordered flex items-center gap-4 dark:bg-slate-900 dark:text-white border-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow " placeholder="Email" />
          </label>

          <button className="btn btn-secondary mt-6  px-8 ">Send</button>
        </div>
        <div className=" sm:w-[115%] md:w-lvw mt-10 right flex justify-center">
          <img
            src="/Banner.png"
            // className="dark:bg-slate-900 dark:text-white "
            alt="Image"
            srcSet=""
          />
        </div>
      </div>
    </>
  );
}
export default Banner;
