import React from 'react'

function Card() {
  return (
    <>
      <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="rounded-t-lg w-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5wo-PyQD1jjOGMXCLvsItYqrFDK7OHmHEE2x407wMEg&s"
            alt=""
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-xl font-bold tracking-tight font-vazir text-gray-900 dark:text-white text-right">
              فیگما چیست و چه کاربرد و مزایایی دارد؟
            </h5>
          </a>
          <p className="mb-3 font-normal font-vazir line-clamp-2 text-gray-700 text dark:text-gray-400">
            اگر تا به حال در حوزه گرافیک و مشاغل مربوط به آن فعالیت کرده باشید،
            احتمالا تا حدودی با اهمیت رابط کاربری و میزان ارزش آن برای سایت و یا
            نرم‌افزارهای دیگر آشنا هستید. یکی از ابزارهای طراحی رابط کاربری،
            فیگما است. این نرم‌افزار هم مانند فتوشاپ برای طراحی گرافیک ایجاد
            شده، اما تفاوت‌های قابل توجهی با آن دارد. برای آن‌که بدانید فیگما
            چیست و با مزایا و ویژگی‌های آن شوید، پیشنهاد می‌کنیم تا انتهای مقاله
            با ما همراه باشید.
          </p>
          <a
            href="#"
            className="inline-flex  items-center px-3 py-2 text-sm font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
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

export default Card