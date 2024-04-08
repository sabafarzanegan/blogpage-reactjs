import React from "react";
import Blogs from "../components/blogs/Blogs";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import ContentBlog from "../components/contentblog/ContentBlog";
function Home() {
  return (
    <>
      <Navbar />
      {/* <Blogs /> */}
      <ContentBlog />
      <Footer />
    </>
  );
}

export default Home;
