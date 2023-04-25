import Header from "../Componets/Header";
import Blog from "../Componets/Blog";
import Footer from "../Componets/Footer";

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="flex justify-center items-center">
        <Blog />
      </div>

      <Footer />
    </div>
  );
};
export default HomePage;
