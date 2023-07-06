import React from "react";

const Card = ({ type, setOpen }) => {
  // async function getMeme(type) {
  //   let meme = await fetch(
  //     "https://api.chucknorris.io/jokes/random?category=" + type
  //   );

  //   meme = await meme.json();

  //   // getType(type, meme);

  //   console.log(meme);
  // }

  return (
    <>
      <div
        onClick={() => {
          // getMeme(type);
          setOpen(type);
        }}
        class=" shadow-xl w-16 h-6 md:w-60 md:h-40 bg-[#FFFFFF] text-center  m-3 rounded-md hover:border border-black capitalize text-white text-lg  
                        cursor-pointer false md:p-3 "
      >
        <h1 class=" text-blue-900 font-bold capitalize text-sm md:text-2xl md:pt-6">
          {type}
        </h1>
        <p class="capitalize text-purple-800 text-sm lg:block md:block hidden">
          unlimited jokes on {type}
        </p>
      </div>
    </>
  );
};

export default Card;
