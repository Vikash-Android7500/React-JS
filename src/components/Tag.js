import { useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const Tag = () => {

  const [tag, setTag] = useState('mobile');

  const { gif, loading, fetchData} = useGif(tag);

  return (
    <div className="w-[full] h-[80%] gap-5 p-5 bg-violet-300 text-center flex flex-col items-center rounded-lg border-b-green-700 border-b-8 border shadow-lg">
      <h3 className="underline uppercase font-semibold">A {tag} GiF</h3>
      {loading ? ( <Spinner />) : (
        <img
          src={gif}
          alt="Gif File"
          className="w-[400px] h-[310px] m-auto rounded-lg"
        />
      )}

      <input
        className="w-[550px] p-2 rounded-lg"
        type="text"
        value={tag}
        onChange={ (event) => setTag(event.target.value)}
      />

      <button
        className="w-[550px] p-2 bg-slate-100 uppercase font-semibold rounded-lg shadow-md hover:bg-slate-300 active:bg-orange-300 duration-200"
        onClick={() => fetchData(tag)}
      >
        new Gif Search
      </button>
    </div>
  );
};
export default Tag;