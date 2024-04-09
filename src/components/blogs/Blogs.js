import React from "react";
import Card from "../card/Card";
import Data from "../../data";
import { useState } from "react";

function Blogs({ blogData }) {
  // const [datas, setdatas] = useState(Data);
  console.log("blogs");
  console.log(blogData);

  return (
    <div className="w-full bg=[#f9f9f9] py-[50px] mt-28 ">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid  mx-auto  md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 ">
          {blogData.data.map((blog) => (
            <Card key={blog.id} {...blog} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
