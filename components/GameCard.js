import React, { useState, useEffect } from "react";
import GameScore from "./GameScore";

export default function GameCard({ game }) {
  const [bestPrice, setBestPrice] = useState("");
  const [storeId, setStoreId] = useState("");
  const [storeName, setStoreName] = useState("");
  const [dealId, setDealId] = useState("");

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const gameResponse = await fetch(
          `${"https://www.cheapshark.com/api/1.0/deals?title="}${game.name}`
        );
        if (!gameResponse.ok) throw Error("Did not receive prices.");
        const deals = await gameResponse.json();
        deals.map((deal) => {
          if (deal.isOnSale === "1") {
            if (deal.salePrice < bestPrice || bestPrice === "") {
              setBestPrice(deal.salePrice);
              setStoreId(deal.storeID);
              setDealId(deal.dealID);
            }
          } else {
            if (deal.normalPrice < bestPrice) {
              setBestPrice(deal.normalPrice);
              setStoreId(deal.storeID);
              setDealId(deal.dealID);
            }
          }
        });

        const storeResponse = await fetch(
          "https://www.cheapshark.com/api/1.0/stores"
        );
        if (!storeResponse.ok) throw Error("Did not receive prices.");
        const stores = await storeResponse.json();
        stores.map((store) => {
          if (store.storeID === storeId) {
            setStoreName(store.storeName);
          }
        });
      } catch (err) {
        console.log(err.message);
      }
    };

    (async () => await fetchPrices())();
  }, []);

  return (
    <div className="relative w-80 m-4">
      <div className="flex flex-col justify-center text-white group w-80 rounded-3xl bg-zinc-800 drop-shadow-lg">
        <img
          src={game.background_image}
          className="object-cover w-full h-40 rounded-t-3xl"
        />
        <div className="">
          <div className="flex justify-end">
            <GameScore score={game.metacritic}></GameScore>
          </div>
          <div className="">
            <div className="mb-6 ml-6 text-xl ">{game.name}</div>
            <div className="hidden group-hover:block">
              <div className="flex justify-between mx-6 mb-14 ">
                <div>
                  <div>Release</div>
                  <div>Genres</div>
                </div>
                <div className="text-right">
                  <div>{game.released}</div>
                  <div>
                    {game.genres.slice(0, 2).map((genre) => genre.name + " ")}
                  </div>
                </div>
              </div>
              <div className="mx-6 mb-4">
                <div>
                  <div>Cheapest</div>
                </div>
                <div className="flex justify-between text-right align-middle">
                  <div>{storeName}</div>
                  <a className="p-2 bg-zinc-900 rounded-xl">
                    {bestPrice !== "" ? (
                      <a
                        href={`${"https://www.cheapshark.com/redirect?dealID="}${dealId}`}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {bestPrice}$
                      </a>
                    ) : (
                      "Not Available"
                    )}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
