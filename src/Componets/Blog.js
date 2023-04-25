import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import Spinner from "./Spinner";
import "./blog.css";
import ErrerPage from "./ErrerPage.png";
import BlogDetails from "./BlogDetails";


const Blog = () => {
  //consume
  const { posts, loading } = useContext(AppContext);

  return (
    <div className="w-1/2 max-w-[670px] h-full py-8 flex flex-col gap-y-7 justify-center items-center mt-[66px] mb-[70px]">
      {
        loading 
      ? (
        <Spinner />
      )
      : posts.length === 0 
      ? (
        <div className="text-center font-bold text-2xl">

          <img className="w-[350px] h-[350px]" src={ErrerPage} alt="Errer Image"/>
          <p>No Post Found</p>

        </div>
      ) 
      : ( posts.map((post) => (
           <BlogDetails key={post.id} post={post}/> 
        ))
      )
      }
    </div>
  );
};

export default Blog;
