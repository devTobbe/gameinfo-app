import React from "react";
import GameScore from "./GameScore";
import {useState, useEffect} from "react"

const GameInfo = ({gameId}) => {

  const [specificGameInfo, setSpecificGameInfo] = useState("");

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSpecificGame = async () => {
      try {
        const gameResponse = await fetch(
          "https://api.rawg.io/api/games/"+gameId+"?key=dc469c23c1bb4c1bbb5d9562b46e5082"
        );
        if (!gameResponse.ok) throw Error("Did not receive gameInfo.");
        const game = await gameResponse.json();
        setSpecificGameInfo(game);
      } catch (err) {
        console.log(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    (async () => await fetchSpecificGame())();
  }, []);

  return (
    <>
      {isLoading && <p className="text-accent">Loading...</p>}
      {!isLoading && (
        <div className="flex flex-col justify-start min-h-screen py-6 overflow-hidden text-white bg-zinc-900">
          <div className="flex flex-col items-center space-y-1">
            <div className="w-100 overflow absolute h-[300px] overflow-hidden blur-lg">
              <img
                className="object-cover w-100 h-100 blur-lg"
                src={specificGameInfo.background_image}
                alt={"Blurry " + specificGameInfo.name + " artwork"}
              />
            </div>
            <img
              className="z-10 h-[280px] w-[208px] rounded-2xl"
              src={specificGameInfo.background_image}
              alt={specificGameInfo.name + " image"}
            />
            <h1 className="font-bold text-white font-Rubik">{specificGameInfo.name}</h1>
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
                <div className="text-white capitalize bg-zinc-900">price$</div>
              </div>
              <h1>GALLERY PLACEHOLDER</h1>
              <h1 className="capitalize">information:</h1>
              <div className="flex w-[80%] flex-row items-center justify-between">
                <p className="uppercase">platforms</p>
                <ul>
                  {specificGameInfo.platforms.map((platform) => (
                  <li key={platform.platform.id} className="w-40 text-right capitalize">
                    {platform.platform.name}
                  </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-[80%] flex-row items-center justify-between">
                <p className="uppercase">languages</p>
                <p className="w-40 text-right capitalize">
                  English, Dutch, Spansih, German, French
                </p>
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
              <p className="uppercase">similar games placeholder</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GameInfo;
