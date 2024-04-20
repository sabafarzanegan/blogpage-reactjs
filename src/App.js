import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ContentBlogPage from "./pages/ContentBlogPage";
import UseFetch from "./components/Hook/UseFetch";

function App() {
  let { loading, data, error } = UseFetch(
    "http://localhost:1337/api/blogs?populate=*"
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  // console.log(data);

  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home blogdata={data} />} />
        <Route path="/blog/:id" element={<ContentBlogPage contentdata={data} />} />
      </Routes>
    </>
  );
}

export default App;
