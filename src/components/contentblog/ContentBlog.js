import React from "react";

function ContentBlog({ contentBlog }) {
  // console.log("content blog");
  // console.log(contentBlog);
  return (
    <>
      <div className="w-full mt-28">
        <div className="mx-w-[1240px] mx-auto px-8 py-6 ">
          <div
            className="md:flex md:flex-row md:items-start md:justify-center flex flex-col-reverse gap-10 
          "
          >
            {/* author section */}
            <div className="border border-2 border-gray-300 shadow-md p-6 w-40 ">
              <h5 className="mb-2 font-bold font-vazir text-gray-700 font-xl dark:text-gray-100">
                نویسنده
              </h5>
              <h4 className="font-md font-vazir dark:text-gray-100">
                {contentBlog.data[0].attributes.auhtorblog}
              </h4>
            </div>
            <div className="">
              <img
                className="w-[600px] h-[300px]"
                src={`http://localhost:1337${contentBlog.data[1].attributes.imgblog.data.attributes.url}`}
                alt=""
              />

              <h5 className="font-bold font-vazir mt-6 text-3xl text-gray-900 dark:text-gray-100">
                {contentBlog.data[1].attributes.title}
              </h5>
              <p className="text-lg text-gray-700 dark:text-gray-100 mt-2 text-justify leading-8">
                {contentBlog.data[1].attributes.contentblog}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContentBlog;
