import React from "react";

function Cards({ item }) {
  console.log(item);
  return (
    <>
      <div className="flex justify-center mt-4 ">
        <div className="card bg-base-100 w-80 shadow-xl m-2 hover:scale-105 duration-300">
          <figure>
            <img
              src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?w=740&t=st=1719294046~exp=1719294646~hmac=3845837703329b8489de013e5fb86e498ecbeb6115506d5c2360598e89e233b4"
              alt="Book"
            />
          </figure>
          <div className="card-body dark:bg-slate-900 dark:text-white dark:border rounded-md">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.description}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">{item.price}$</div>
              <div className="p-1 rounded-full hover:bg-pink-500 hover:text-white duration-200">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
