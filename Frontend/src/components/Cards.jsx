import React from "react";

function Cards({ item }) {
  //   console.log(item);
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card w-80 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img
              src="https://img.freepik.com/free-vector/books-stack-realistic_1284-4735.jpg?size=626&ext=jpg&ga=GA1.1.968925204.1707545913&semt=sphhttps://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="book-img"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className=" cursor-pointer badge badge-outline hover:bg-pink-500 hover:text-white px-2 p-3 duration-200">
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
