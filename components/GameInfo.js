import React from "react";
import GameScore from "./GameScore";
import NextJsCarousel from "../components/Carousel";
import { useState, useEffect } from "react";

const GameInfo = ({ gameId, setSpecificGame }) => {
  const [specificGameInfo, setSpecificGameInfo] = useState("");

  const [bestPrice, setBestPrice] = useState("");

  const [isLoading, setIsLoading] = useState(true);

  const [screenshots, setScreenshots] = useState([]);

  //const [screenshots, setScreenshots] = useState("");

  useEffect(() => {

    const fetchSpecificGame = async () => {
      try {
        const gameResponse = await fetch(
          "https://api.rawg.io/api/games/"+gameId+"?key=dc469c23c1bb4c1bbb5d9562b46e5082"
        );
        if (!gameResponse.ok) throw Error("Did not receive gameInfo.");
        const game = await gameResponse.json();
        setSpecificGameInfo(game);
        const imageResponse = await fetch(
          "https://api.rawg.io/api/games/"+gameId+"/screenshots?key=dc469c23c1bb4c1bbb5d9562b46e5082");
        if (!gameResponse.ok) throw Error("Did not receive screenshots.");
        const screenshots = await imageResponse.json();
        const images = screenshots.results; // help
        setScreenshots(images);
      } catch (err) {
        console.log(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    
    (async () => await fetchSpecificGame())();
  }, []);


  const fetchPrices = async () => {

    try {
      const dealResponse = await fetch(
        `${"https://www.cheapshark.com/api/1.0/deals?exact=1&title="}${
          specificGameInfo.name
        }`
      );
      if (!dealResponse.ok) throw Error("Did not receive deals.");
      const deals = await dealResponse.json();

      await findBestValue(deals);

    } catch (err) {
      console.log(err.message);
    }
  };

  const findBestValue = async (deals) => {
    let priceValue = "";

    deals.map((deal) => {
      if (deal.isOnSale === "1") {
        if (deal.salePrice < priceValue || priceValue === "") {
          priceValue = deal.salePrice;
        }
      } else {
        if (deal.normalPrice < priceValue) {
          priceValue = deal.normalPrice;
        }
      }
    });
    setBestPrice(priceValue);
  };

  

  return (
    <>
        <div className="flex flex-col justify-start min-h-screen py-6 overflow-hidden text-white bg-zinc-900">
          {isLoading && <p className="text-center text-accent">Loading...</p>}
          {!isLoading && (
          <div className="flex flex-col items-center space-y-1" onLoadStart={fetchPrices()}>
            <div className="w-100 overflow absolute h-[300px] overflow-hidden blur-lg">
              <img
                className="object-cover w-100 h-100 blur-lg"
                src={specificGameInfo.background_image}
                alt={"Blurry " + specificGameInfo.name + " artwork"}
              />
            </div>
            <img
              className="object-cover object-center block ml-auto mr-auto  z-10 h-[280px] w-[208px] rounded-2xl"
              src={specificGameInfo.background_image}
              alt={specificGameInfo.name + " image"}
            />
            <h1 className="font-bold text-white font-Rubik">
              {specificGameInfo.name}
            </h1>
            <ul>
              {specificGameInfo.developers.map((developer) => (
                <li key={developer.id} className="text-white font-Rubik">
                  {developer.name}
                </li>
              ))}
            </ul>
            <GameScore score={specificGameInfo.metacritic} />
            <div className="flex w-[100%] max-w-[570px] flex-col items-center space-y-4">
              <div className="flex w-[80%] flex-row justify-between">
                <p className="uppercase font-Rubik">released</p>
                <p className="font-Roboto">{specificGameInfo.released}</p>
              </div>
              <div className="flex w-[80%] flex-row justify-between">
                <p className="uppercase">genres</p>
                <ul>
                  {specificGameInfo.genres.map((genre) => (
                    <li key={genre.id} className="w-40 text-right capitalize">
                      {genre.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-[80%] flex-row justify-between">
                <p className="uppercase">cheapest</p>
                <div className="text-white capitalize bg-zinc-900">{bestPrice}$</div>
              </div>
              <h1>GALLERY</h1>
              <NextJsCarousel images={screenshots}/>
              <h1 className="capitalize">information:</h1>
              <div className="flex w-[80%] flex-row items-center justify-between">
                <p className="uppercase">platforms</p>
                <ul>
                  {specificGameInfo.platforms.map((platform) => (
                    <li
                      key={platform.platform.id}
                      className="w-40 text-right capitalize"
                    >
                      {platform.platform.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-[80%] flex-row items-center justify-between">
                <p className="uppercase">publisher</p>
                <ul>
                  {specificGameInfo.publishers.map((publisher) => (
                    <li key={publisher.id} className="text-right capitalize">
                      {publisher.name}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => {setSpecificGame("")}}
                className="flex justify-start p-1 transition duration-300 border-2 rounded-full border-white/0 hover:border-white/100 hover:opacity-60"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          )}
        </div>
    </>
  );
};

export default GameInfo;
