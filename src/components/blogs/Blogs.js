import React from "react";
import Card from "../card/Card";

function Blogs() {
  return (
    <div className="w-full bg=[#f9f9f9] py-[50px] ">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid  mx-auto  md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 ">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Blogs;
