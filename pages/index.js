import GameCard from "../components/GameCard";
import Navbar from "../components/Navbar";
import Head from "next/head";
import PageNavigation from "../components/PageNavigation";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";

export default function Home() {
  const [games, setGames] = useState([]);

  const [prevPageLink, setPrevPageLink] = useState("");
  const [nextPageLink, setNextPageLink] = useState("");

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const gameResponse = await fetch(
          "https://api.rawg.io/api/games?key=dc469c23c1bb4c1bbb5d9562b46e5082&platforms=4"
        );
        if (!gameResponse.ok) throw Error("Did not receive games.");
        const games = await gameResponse.json();
        setGames(games.results);
        setPrevPageLink(games.previous);
        setNextPageLink(games.next);
      } catch (err) {
        console.log(err.message);
      }
    };

    (async () => await fetchGames())();
  }, []);

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&family=Rubik&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className="flex flex-col bg-zinc-900">
        <Navbar />
        <a id="top"></a>
        <div className="">
          <div className="py-8 text-center basis-2/5">
            <h1 className="text-2xl text-slate-50 font-Rubik">Games</h1>
            <h4 className="text-accent text-1xl font-Roboto">
              Featured in May
            </h4>
          </div>
          <div className="">
            <div className="mb-3">
              <div className="relative flex flex-row justify-center w-full mb-4 input-group">
                <input
                  type="search"
                  className="mx-2 form-control relative min-w-0 block w-60 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-accent focus:outline-none"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="button-addon2"
                ></input>
                <button
                  className="btn inline-block px-6 py-2.5 bg-accent text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-accent/70 hover:shadow-lg focus:bg-accent/70  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-accent/30 active:shadow-lg transition duration-150 ease-in-out flex items-center"
                  type="button"
                  id="button-addon2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mx-2 stroke-gray-900"
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
                <button className="mx-2 border-accent hover:border-accent/70 hover:stroke-accent/70 border-2 rounded-md w-[50px] h-[50px] flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 stroke-accent  "
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
          <div className="flex items-center justify-center">
            <div className="flex flex-col flex-wrap items-center md:h-[2950px] md:w-[704px] xl:h-[2150px] xl:w-[1056px] 2xl:h-[1600px] 2xl:w-[1408px]">
              {games.map((game) => (
                <div className="">
                  <GameCard key={game.id} game={game}></GameCard>
                </div>
              ))}
            </div>
          </div>
          <PageNavigation
            prevPageLink={prevPageLink}
            setPrevPageLink={setPrevPageLink}
            nextPageLink={nextPageLink}
            setNextPageLink={setNextPageLink}
            setGames={setGames}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
