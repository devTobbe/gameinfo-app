export default function GenreItem({ genre }) {
  var toggled = false;
  return (
    <div>
      {toggled ? (
        <button
          onClick={() => (toggled = !toggled)}
          className="m-1 text-accent font-Roboto border-2 border-accent rounded-md px-2 opacity-100 hover:opacity-50 transition duration-300"
        >
          {genre}
        </button>
      ) : (
        <button
          onClick={() => (toggled = !toggled)}
          className="m-1 text-zinc-800 font-Roboto rounded-md bg-accent px-2 opacity-100 hover:opacity-50 transition duration-300"
        >
          {genre}
        </button>
      )}
    </div>
  );
}
