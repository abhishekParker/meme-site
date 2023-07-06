import React, { useEffect } from "react";
import Loader from "./Loader";

const Modal = ({ setOpen, category }) => {
  const [description, setDescription] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const getMeme = async (category) => {
    setLoading(true);
    let data = await fetch(
      "https://api.chucknorris.io/jokes/random?category=" + category
    );
    data = await data.json();

    setDescription(data.value);
    setLoading(false);
  };

  useEffect(() => {
    getMeme(category);
  }, []);

  return (
    <div class="card absolute shadow-2xl md:top-56  top-72 lg:rounded-md card p-5 lg:w-1/2 md:w-1/2 ">
      <svg
        onClick={() => {
          setOpen(false);
        }}
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 float-right text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        ></path>
      </svg>
      <h1 class="text-center text-xl text-white font-bold">
        {" "}
        <span class=" block capitalize text-3xl text-white">{category}</span>
      </h1>
      <div class="w-full border border-black m-auto mt-6 shadow-xl flex flex-col items-center justify-center">
        {loading ? (
          <Loader />
        ) : (
          <p class="text-center font-semibold text-blue-100   font-sans  m-5 text-xl md:text-3xl">
            {description}
          </p>
        )}
        <button
          onClick={() => getMeme(category)}
          class="px-4 py-2 bg-blue-700  my-2 mx-3 cursor-pointer lg:w-96 md:96  rounded-md hover:bg-blue-600 font-bold "
        >
          Next joke
        </button>
      </div>
    </div>
  );
};

export default Modal;
