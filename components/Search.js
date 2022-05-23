import React, { useState } from "react";

const Search = ({
  setGames,
  setPrevPageLink,
  setNextPageLink,
  setCurrentPageNumber,
  setSearchUrl,
  filterUrl,
  genreToggle,
  setGenreToggle,
  setIsLoading
}) => {

  const [search, setSearch] = useState("");

  const handleSearch = async (e) => {
    setIsLoading(true);

    e.preventDefault();

    try {
      const gameResponse = await fetch("https://api.rawg.io/api/games?key=dc469c23c1bb4c1bbb5d9562b46e5082&platforms=4"
      + "&search=" + search + (filterUrl !== "&genres=" ? filterUrl : ""));
      if (!gameResponse.ok) throw Error("Did not receive games.");
      const games = await gameResponse.json();
      setGames(games.results);
      setCurrentPageNumber(1);
      setPrevPageLink(games.previous);
      setNextPageLink(games.next);
    } catch (err) {
      console.log(err.message);
    } finally {
      setSearchUrl("&search=" + search);
      setIsLoading(false);
    }
  };

  return (
    <div className="">
      <div className="mb-3">
        <div className="relative flex flex-row justify-center w-full mb-4 input-group">
          <form className="flex flex-row" onSubmit={handleSearch}>
            <input
              type="search"
              className="mx-2 form-control relative min-w-0 block w-60 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-accent focus:outline-none"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon2"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            ></input>
            <button
              className="btn px-6 py-2.5 bg-accent text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-accent opacity-100 hover:opacity-50 hover:shadow-lg focus:bg-accent/70  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-accent/30 active:shadow-lg transition duration-150 ease-in-out flex items-center"
              type="submit"
              id="button-addon2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-2 stroke-gray-900"
                fill="none"
                viewBox="0 0 24 24 "
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </form>
          {genreToggle ? (
            <button onClick={() => setGenreToggle(false)} className="mx-2 bg-accent border-accent hover:border-accent hover:stroke-accent opacity-100 hover:opacity-50 border-2 rounded-md w-[50px] h-[50px] flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 stroke-zinc-800"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </button>
          ) : (
            <button onClick={() => setGenreToggle(true)} className="mx-2 border-accent hover:border-accent hover:stroke-accent opacity-100 hover:opacity-50 border-2 rounded-md w-[50px] h-[50px] flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 stroke-accent"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
          </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
