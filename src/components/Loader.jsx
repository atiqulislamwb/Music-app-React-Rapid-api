import { loader } from "../assets";
const Loader = ({ title }) => (
  <div className="w-full flex justify-center items-center flex-col">
    <img src={loader} alt="Loader" className="w-32 h-32 object-cover" />
    <h1 className="text-white font-bold text-2xl mt-4 ">
      {title || "Loading..."}
    </h1>
  </div>
);

export default Loader;
