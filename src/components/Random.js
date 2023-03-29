import useGif from "../hooks/useGif";
import Spinner from "./Spinner";


const Random = () => {

  const {gif, loading, fetchData} = useGif();

  return (
    <div className="w-[800px] h-[420px] gap-5 p-5 bg-green-300 text-center flex flex-col items-center rounded-lg border-b-green-700 border-b-8 border shadow-lg">
      <h3 className="underline uppercase font-semibold">A Random GiF</h3>
       {
        loading ? (<Spinner/>) : (<img src={gif} alt="Gif File" width="250" className="m-auto rounded-lg" />)
       }   

            
      <button
        onClick={() => fetchData()}
        className="w-[550px] p-2 bg-slate-100 uppercase font-semibold rounded-lg shadow-md hover:bg-slate-300 active:bg-orange-300 duration-200"
      >
        Random generate
      </button>
    </div>
  );
};
export default Random;
