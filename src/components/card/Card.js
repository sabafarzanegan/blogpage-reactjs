import React from "react";

function Card({ ...data }) {
console.log(data);
  return (
    <>
      <div className="w-full bg-white border border-gray-200 rounded-lg shadow-lg dark:shadow- dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg w-full" src={data.img} alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-xl font-bold tracking-tight font-vazir text-gray-900 dark:text-white text-right">
              {data.title}
            </h5>
            <h6 className="text-white">{data.id}</h6>
          </a>
          <p className="mb-3 font-normal font-vazir line-clamp-2 text-gray-700 text dark:text-gray-400">
            {data.desc}
          </p>
          <a 
            href="#"
            className="inline-flex  items-center px-3 py-2 text-sm font-medium font-vazir text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
             بیشتر بخوانید
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}

export default Card;
