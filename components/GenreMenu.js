import GenreItem from "./GenreItem";

export default function GenreMenu() {
  return (
    <div className="relative my-4 p-4 w-[100%] bg-zinc-800">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl text-slate-50 font-Rubik ">Genres</h1>
        <div className="flex flex-wrap max-w-[346px] justify-center">
          <GenreItem genre="TEST" />
          <GenreItem genre="TEST" />
          <GenreItem genre="TEST" />
          <GenreItem genre="TEST" />
          <GenreItem genre="TEST" />
          <GenreItem genre="TEST" />
          <GenreItem genre="TEST" />
          <GenreItem genre="TEST" />
          <GenreItem genre="TEST" />
        </div>
      </div>
    </div>
  );
}
