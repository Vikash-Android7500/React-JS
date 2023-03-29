import Random from "./components/Random";
import Tag from "./components/Tag";
export default function App() {
  return (
    <div className="w-full flex flex-col gap-5 items-center bg-gray-300 ">
      <h1 className="bg-white rounded-lg w-[1300px] h-10 p-2 mt-2 text-center 2xl uppercase font-bold">random Gifs</h1>
      <div className="flex flex-col justify-between gap-5">
        <Random />
        <Tag />
      </div>
    </div>
  );
};
