import React, {useState} from 'react'

const Search = ({setGames, setPrevPageLink, setNextPageLink }) => {

    const [search, setSearch] = useState("");

    const handleSearch = async (e) => {
        e.preventDefault();

        try {
            const gameResponse = await fetch(
              `${"https://api.rawg.io/api/games?key=dc469c23c1bb4c1bbb5d9562b46e5082&platforms=4&search="}${search}`
            );
            if (!gameResponse.ok) throw Error("Did not receive games.");
            const games = await gameResponse.json();
            setGames(games.results);
            setPrevPageLink(games.previous);
            setNextPageLink(games.next);
          } catch (err) {
            console.log(err.message);
          }
    }

  return (
    <div className="">
        <div className="mb-3">
            <div className="relative flex flex-row justify-center w-full mb-4 input-group">
                <form onSubmit={handleSearch}>
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
                        className="btn px-6 py-2.5 bg-accent text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-accent/70 hover:shadow-lg focus:bg-accent/70  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-accent/30 active:shadow-lg transition duration-150 ease-in-out flex items-center"
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
                <button className="mx-2 border-accent hover:border-accent/70 hover:stroke-accent/70 border-2 rounded-md w-[50px] h-[50px] flex justify-center items-center">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 stroke-accent "
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
            </div>
        </div>
    </div>
  )
}

export default Search