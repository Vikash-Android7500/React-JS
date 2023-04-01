import './App.css';
import Header from './Componets/Header';
import Blog from './Componets/Blog';
import Footer from './Componets/Footer';
import { useContext, useEffect } from 'react';
import { AppContext } from './Context/AppContext';
function App() {

  const {fetchBlogPosts} = useContext(AppContext);
  useEffect( () => {
    fetchBlogPosts();
  },[]);

  return (
    <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center">
      <Header />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
