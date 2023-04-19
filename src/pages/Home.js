import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
import ErrerPage from "../components/images/ErrerPage.png";


const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProductData() {
    setLoading(true);

    try{
      const res = await fetch(API_URL);
      const data = await res.json();

      setPosts(data);
    }
    catch(error) {
      console.log("Errer Page");
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect( () => {
    fetchProductData();
  },[])

  return (
    <div className="flex flex-col justify-center items-center">
      {
        loading ? <Spinner/> :
        posts.length > 0 ? 
        (<div>
          {
            posts.map( (post) => (
            <Product key = {post.id} post={post}/>
          ) )
          }
        </div>) :
        <div className="flex flex-col justify-center items-center">
          <img width={350} alt="Errer Image"
           src={ErrerPage}

          />
          <p className="font-mono text-2xl text-blue-800">No Data Found</p>
        </div> 
      }
    </div>
  );
};

export default Home;
