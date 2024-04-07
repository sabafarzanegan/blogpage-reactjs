import React from "react";
import { useState, useEffect } from "react";

function Navbar() {
  const [isShowBar, setisShowBar] = useState(false);
  const [theme, setTheme] = useState(false);

  const showbarhandler = () => {
    setisShowBar((prev) => !prev);
  };
  const hiddenbarhandler = () => {
    setisShowBar(false);
  };
  const lighthandlertoggle = () => {
    setTheme(false);
  
    document.querySelector("html").classList.remove("dark");
     document.querySelector("body").classList.remove("bg-dark");
   
  };
  const darkhandlertoggle = () => {
    setTheme(true);
    
    document.querySelector("html").classList.add("dark");
    document.querySelector("body").classList.add("bg-dark")
    
  };
  useEffect(() => {
    darkhandlertoggle();
    lighthandlertoggle();
  }, []);

  return (
    <>
      <div className="w-full h-16 bg-white shadow-lg fixed relative top-0 right-0 z-10 p-2 font-vazir dark:bg-gray-800 dark:text-zinc-300 ">
        <div className="flex justify-between items-center w-full h-full p-6 mt-1">
          <div className="flex items-center justify-center gap-5">
            <img
              className="w-8 h-8"
              src="data:image/svg+xml,%3csvg%20width='800'%20height='800'%20viewBox='0%200%20800%20800'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M39%20282c0-118%200-176.9%2036.6-213.5C112.2%2032%20171.1%2032%20288.9%2032h221.2c117.8%200%20176.7%200%20213.3%2036.6C760%20105.2%20760%20164.1%20760%20281.9v221.2c0%20117.8%200%20176.7-36.6%20213.3C686.8%20753%20627.9%20753%20510.1%20753H288.9c-117.8%200-176.7%200-213.3-36.6C39%20679.8%2039%20620.9%2039%20503.1V281.9Z'%20fill='%234945FF'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M536.4%20250.7H293.7v123.8h123.8v123.7h123.8V255.5c0-2.6-2.2-4.8-4.9-4.8Z'%20fill='%23fff'/%3e%3cpath%20fill='%23fff'%20d='M412.7%20374.5h4.8v4.8h-4.8z'/%3e%3cpath%20d='M293.8%20374.5h119c2.6%200%204.8%202.1%204.8%204.8v119h-119a4.8%204.8%200%200%201-4.8-4.9v-119Z'%20fill='%239593FF'/%3e%3cpath%20d='M417.5%20498.2h123.8L421.6%20618a2.4%202.4%200%200%201-4-1.7v-118ZM293.8%20374.5h-118a2.4%202.4%200%200%201-1.7-4.1l119.7-119.7v123.8Z'%20fill='%239593FF'/%3e%3c/svg%3e"
              alt=""
            />
            <div className="flex items-center justify-center gap-3 cursor-pointer">
              <button onClick={lighthandlertoggle}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`w-6 h-6  `}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  />
                </svg>
              </button>
              <button onClick={darkhandlertoggle}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`w-6 h-6 `}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                  />
                </svg>
              </button>
            </div>
          </div>

          <ul className="flex flex-row-reverse items-center justify-center gap-4 cursor-pointer hidden md:flex">
            <li>
              <a>تماس باما</a>
            </li>
            <li>
              <a>درباره ی ما</a>
            </li>
            <li>
              <a>خانه</a>
            </li>
          </ul>
          <div className="flex items-center justify-center hidden md:inline-block ">
            <a className="px-4 py-1 bg-indigo-700 text-white rounded-md cursor-pointer mx-3 hover:bg-indigo-500">
              ورود
            </a>
            <a className="px-4 py-1 bg-white border border-indigo-700 text-indigo-800 cursor-pointer rounded-md hover:bg-indigo-700 hover:text-white ">
              ثبت نام
            </a>
          </div>
          <svg
            onClick={showbarhandler}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer sm:visible md:hidden"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        </div>
        <div
          className={`w-full h-96 bg-indigo-600 fixed -top-96 right-0 z-20 md:hidden ${
            isShowBar ? "showbar" : "hiddenbar"
          }`}
        >
          <div className="flex items-center justify-between border border-b border-b-indigo-500 px-2 py-2 mb-4">
            <div className="flex items-center justify-center gap-2">
              <img
                className="w-8 h-8 border border-white rounded-md"
                src="data:image/svg+xml,%3csvg%20width='800'%20height='800'%20viewBox='0%200%20800%20800'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M39%20282c0-118%200-176.9%2036.6-213.5C112.2%2032%20171.1%2032%20288.9%2032h221.2c117.8%200%20176.7%200%20213.3%2036.6C760%20105.2%20760%20164.1%20760%20281.9v221.2c0%20117.8%200%20176.7-36.6%20213.3C686.8%20753%20627.9%20753%20510.1%20753H288.9c-117.8%200-176.7%200-213.3-36.6C39%20679.8%2039%20620.9%2039%20503.1V281.9Z'%20fill='%234945FF'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M536.4%20250.7H293.7v123.8h123.8v123.7h123.8V255.5c0-2.6-2.2-4.8-4.9-4.8Z'%20fill='%23fff'/%3e%3cpath%20fill='%23fff'%20d='M412.7%20374.5h4.8v4.8h-4.8z'/%3e%3cpath%20d='M293.8%20374.5h119c2.6%200%204.8%202.1%204.8%204.8v119h-119a4.8%204.8%200%200%201-4.8-4.9v-119Z'%20fill='%239593FF'/%3e%3cpath%20d='M417.5%20498.2h123.8L421.6%20618a2.4%202.4%200%200%201-4-1.7v-118ZM293.8%20374.5h-118a2.4%202.4%200%200%201-1.7-4.1l119.7-119.7v123.8Z'%20fill='%239593FF'/%3e%3c/svg%3e"
                alt=""
              />
              <h3 className="font-vazir font-bold text-white">strapi blog</h3>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 rotate-45 cursor-pointer text-white"
                onClick={hiddenbarhandler}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
          </div>
          <div>
            <ul className="flex flex-col-reverse  items-start justify-center gap-4 px-4 mt-2 cursor-pointer text-white">
              <li>
                <a>تماس باما</a>
              </li>
              <li>
                <a>درباره ی ما</a>
              </li>
              <li>
                <a>خانه</a>
              </li>
            </ul>
            <div className="flex items-center justify-center mt-8   ">
              <a className="px-4 py-1 bg-white text-indigo-800 rounded-md cursor-pointer mx-3">
                ورود
              </a>
              <a className="px-4 py-1 bg-white border border-indigo-700 text-indigo-800 cursor-pointer rounded-md ">
                ثبت نام
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
