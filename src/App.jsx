import { useState, useEffect } from "react";
import "./App.css";
import Card from "./Card";
import Modal from "./Modal";

function App() {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  // const [category, setCategory] = useState("");
  // const [description, setDescription] = useState("");
  useEffect(() => {
    async function getData() {
      let newData = await fetch("https://api.chucknorris.io/jokes/categories");

      newData = await newData.json();
      setData(newData);
    }

    getData();
  }, []);

  return (
    <div class="h-fit flex flex-col items-center justify-center">
      <h1 class="text-4xl text-green-500 animate-bounce font-bold ">
        Chuck Norries
      </h1>
      <div class="grid lg:grid-cols-4 md:grid-cols-2  grid-cols-4   bg-transparent text-white text-lg   md:gap-y-3  md:w-fit">
        {data.map((item, index) => (
          <Card type={item} key={index} setOpen={setOpen} />
        ))}
      </div>
      {open && <Modal setOpen={setOpen} category={open} />}
    </div>
  );
}

export default App;
