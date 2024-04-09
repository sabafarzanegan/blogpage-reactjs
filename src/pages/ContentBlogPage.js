import React from "react";
import ContentBlog from "../components/contentblog/ContentBlog";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Data from "../data";
import { useState } from "react";

function ContentBlogPage({ contentdata }) {
 
  // console.log("content blog");
  // console.log(contentdata);
  return (
    <>
      <Navbar />
      <ContentBlog contentBlog={contentdata} />
      <Footer />
    </>
  );
}

export default ContentBlogPage;
