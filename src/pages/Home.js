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

    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setPosts(data);
    }
    catch (error) {
      console.log("Errer Page");
      setPosts([]);
    }
    finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      {loading ? (
        <Spinner />
      ) : posts.length > 0 ? (
        <div className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
          {posts.map((post) => (
            <Product key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <img width={350} alt="png" src={ErrerPage} />
          <p className="font-mono text-2xl text-blue-800">No Data Found</p>
        </div>
      )}
    </div>
  );
};

export default Home;
