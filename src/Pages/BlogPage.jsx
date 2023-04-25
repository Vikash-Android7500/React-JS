import Header from "../Componets/Header";
import Spinner from "../Componets/Spinner";
import BlogDetails from "../Componets/BlogDetails";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import ErrerPage from "../Componets/ErrerPage.png";

const BlogPage = () => {
  const newBaseUrl = "https://codehelp-apis.vercel.app/api/";

  const { loading, setLoading } = useContext(AppContext);
  const [blog, setBlog] = useState(null);
  const [relatedblogs, setRelatedBlogs] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  const blogId = location.pathname.split("/").at(-1);

  async function fetchRelatedBlog() {
    setLoading(true);
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);
    } catch {
      setBlog(null);
      setRelatedBlogs([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlog();
    }
  }, [location.pathname]);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Header />

      <div className="relative right-[23%] top-20">
        <button
          className="rounded-md border-2 border-x-green-900 px-4 py-1  hover:bg-green-200 active:bg-green-500 shadow-md"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </div>

      {
        loading 
      ? (
        <div className="h-full mt-20">
          <Spinner />
          <p> Loading</p>
        </div>
      ) 
      : blog ? (
        <div className="w-[55%] h-full py-8 px-5 flex flex-col gap-y-5 mt-[64px] mb-[64px]">
          <BlogDetails post={blog} />
          <h2 className="bg-orange-400"> Related Blogs </h2>
          {relatedblogs.map((post) => (
            <div key={post.id}>
              <BlogDetails post={post} />
            </div>
          ))}
        </div>
      ) 
      : (
        <div className="flex flex-col justify-center items-center mt-20">
          <img src={ErrerPage} width={350}/>
          <p className="text-2xl">No Blog Found</p>
        </div>
      )}
    </div>
  );
};
export default BlogPage;
