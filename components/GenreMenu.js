import GenreItem from "./GenreItem";
import { useState, useEffect } from "react"

export default function GenreMenu({setGames, setPrevPageLink, setNextPageLink, setCurrentPageNumber}) {

  const [genres, setGenres] = useState([]);
  const [filterURL, setFilterURL] = useState("https://api.rawg.io/api/games?key=dc469c23c1bb4c1bbb5d9562b46e5082&platforms=4&genres=")

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const genreResponse = await fetch(
          "https://api.rawg.io/api/genres?key=dc469c23c1bb4c1bbb5d9562b46e5082"
        );
        if (!genreResponse.ok) throw Error("Did not receive genres.");
        const genres = await genreResponse.json();
        setGenres(genres.results);
      } catch (err) {
        console.log(err.message);
      }
    };

    (async () => await fetchGenres())();
  }, []);

  const handleFilter = async (genreSlug, toggle) => {

    var newFilterURL = filterURL;

    if (toggle) {
      newFilterURL = newFilterURL + "," + decapitalize(genreSlug);
    } else {
      newFilterURL = newFilterURL.replace("," + decapitalize(genreSlug), "");
      if (newFilterURL === "https://api.rawg.io/api/games?key=dc469c23c1bb4c1bbb5d9562b46e5082&platforms=4&genres=") {
        newFilterURL = "https://api.rawg.io/api/games?key=dc469c23c1bb4c1bbb5d9562b46e5082&platforms=4";
      }
    }

    try {
      const gameResponse = await fetch(newFilterURL);
      if (!gameResponse.ok) throw Error("Did not receive games.");
      const games = await gameResponse.json();
      setGames(games.results);
      setPrevPageLink(games.previous);
      setNextPageLink(games.next);
      setCurrentPageNumber(1);
    } catch (err) {
      console.log(err.message);
    } finally {
      if (newFilterURL === "https://api.rawg.io/api/games?key=dc469c23c1bb4c1bbb5d9562b46e5082&platforms=4") {
        setFilterURL("https://api.rawg.io/api/games?key=dc469c23c1bb4c1bbb5d9562b46e5082&platforms=4&genres=")
      } else {
        setFilterURL(newFilterURL);
      }
    }
  }

  const decapitalize = ([first, ...rest]) =>
  first.toLowerCase() + rest.join('');

  return (
    <div className="relative my-4 p-4 w-[100%] bg-zinc-800">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl text-slate-50 font-Rubik ">Genres</h1>
        <div className="flex flex-wrap max-w-[346px] justify-center">
          {genres.map((genre) => (
            <GenreItem key={genre.id} genre={genre} handleFilter={handleFilter} />
          ))}
        </div>
      </div>
    </div>
  );
}
