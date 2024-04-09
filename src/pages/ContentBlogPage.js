import React from "react";
import ContentBlog from "../components/contentblog/ContentBlog";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import {useParams} from "react-router-dom"



function ContentBlogPage({ contentdata }) {
  // console.log("content blog");
  // console.log(contentdata);
   
  
  return (
    <>
      <Navbar />
      <ContentBlog contentBlog={contentdata}  />
      <Footer />
    </>
  );
}

export default ContentBlogPage;
