import { useState } from "react";

export default function GenreItem({ genre, handleFilter }) {

  const [toggle, setToggle] = useState(false);

  const handleToggleOn = () => {
    setToggle(true);
    handleFilter(genre.slug, true);
  }

  const handleToggleOff = () => {
    setToggle(false);
    handleFilter(genre.slug, false);
  }

  return (
    <div>
      {toggle ? (
        <button
          onClick={() => handleToggleOff()}
          className="px-2 m-1 transition duration-300 border-2 rounded-md opacity-100 text-zinc-800 font-Roboto bg-accent hover:opacity-50 border-accent"
        >
          {genre.name}
        </button>
      ) : (
        <button
          onClick={() => handleToggleOn()}
          className="px-2 m-1 transition duration-300 border-2 rounded-md opacity-100 text-accent font-Roboto border-accent hover:opacity-50"
        >
          {genre.name}
        </button>
      )}
    </div>
  );
}
