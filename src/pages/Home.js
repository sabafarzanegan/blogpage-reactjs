import React from "react";
import Blogs from "../components/blogs/Blogs";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

function Home({ blogdata }) {
  // console.log("Home");
  // console.log(blogdata);
  return (
    <>
      <Navbar />
      <Blogs blogData={blogdata} />

      <Footer />
    </>
  );
}

export default Home;
