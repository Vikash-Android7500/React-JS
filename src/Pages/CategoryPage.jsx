import Header from "../Componets/Header";
import Blog from "../Componets/Blog";
import Footer from "../Componets/Footer";

import { useNavigate, useLocation } from "react-router-dom";

const CategoryPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const category = location.pathname.split("/").at(-1);

  return (
    <div>
      <Header />

      <div>
        <button className="py-5 px-5"
         onClick={() => navigate(-1)}>
         Back
         </button>

        <h2>
          Blogs on <span>{category}</span>
        </h2>
      </div>
      <Blog />
      <Footer/>
    </div>
  );
};
export default CategoryPage;
