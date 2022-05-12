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
      <main className="flex flex-col bg-zinc-900">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto&family=Rubik&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Navbar />
        <a id="top"></a>
        <Navbar />
        <div className="">
          <div className="py-8 text-center basis-2/5 font-Rubrik">
            <h1 className="text-2xl text-slate-50">Games</h1>
            <h4 className="text-accent text-1xl">Featured in May</h4>
          </div>
          <div className="">
            <div className="mb-3">
              <div className="relative flex flex-row justify-center w-full mb-4 input-group">
                <input
                  type="search"
                  className="form-control relative min-w-0 block w-60 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-accent focus:outline-none"
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
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="search"
                    className="w-4"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex flex-col flex-wrap items-center md:h-[2950px] md:w-[650px] xl:h-[2150px] xl:w-[970px] 2xl:h-[1600px] 2xl:w-[1290px]">
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
