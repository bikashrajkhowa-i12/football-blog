import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import BlogPost from "../pages/BlogPost";
import LandingPage from "../pages/LandingPage";

const BlogRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<LandingPage />} />

        {/** route -> /blog/`${slug}-${blog_id}`  */}
        <Route path="/blog/:slugWithId" element={<BlogPost />} />
      </Routes>
    </Layout>
  );
};

export default BlogRoutes;
