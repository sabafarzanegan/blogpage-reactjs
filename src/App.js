import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ContentBlogPage from "./pages/ContentBlogPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<ContentBlogPage />} />
      </Routes>
    </>
  );
}

export default App;
