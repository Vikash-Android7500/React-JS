import { useLocation, useNavigate } from "react-router-dom";
import Header from "../Componets/Header";
import Blog from "../Componets/Blog";
import Footer from "../Componets/Footer";

const TagPage = () => {
     const navigate = useNavigate();
     const location = useLocation();
     const tag = location.pathname.split("/").at(-1);

     return (
       <div className="flex flex-col justify-center items-center">
         <Header />
         <div className="relative right-[16%] top-20">
           <button
             className="rounded-md border-2 border-x-green-900 px-4 py-1  hover:bg-green-200 active:bg-green-500 shadow-md"
             onClick={() => navigate(-1)}
           >
             Back
           </button>

           <h2 className="bg-blue-100 mt-2 ">
             Blogs Tagged <span>#{tag}</span>
           </h2>
         </div>
         <Blog />
         <Footer />
       </div>
     );
};
export default TagPage;