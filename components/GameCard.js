import React, { useState } from "react";
import GameScore from "./GameScore";

export default function GameCard({ game }) {
  const [bestPrice, setBestPrice] = useState("");
  const [storeName, setStoreName] = useState("");
  const [dealId, setDealId] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const fetchPrices = async () => {
    setIsLoading(true);

    try {
      const gameResponse = await fetch(
        `${"https://www.cheapshark.com/api/1.0/deals?exact=1&title="}${
          game.name
        }`
      );
      if (!gameResponse.ok) throw Error("Did not receive deals.");
      const deals = await gameResponse.json();

      const storeId = await findBestValue(deals);

      const storeResponse = await fetch(
        "https://www.cheapshark.com/api/1.0/stores"
      );
      if (!storeResponse.ok) throw Error("Did not receive stores.");
      const stores = await storeResponse.json();

      await checkStores(stores, storeId);
    } catch (err) {
      console.log(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const findBestValue = async (deals) => {
    let priceValue = "";
    let storeIdValue = "";
    let dealIdValue = "";

    deals.map((deal) => {
      if (deal.isOnSale === "1") {
        if (deal.salePrice < priceValue || priceValue === "") {
          priceValue = deal.salePrice;
          storeIdValue = deal.storeID;
          dealIdValue = deal.dealID;
        }
      } else {
        if (deal.normalPrice < priceValue) {
          priceValue = deal.normalPrice;
          storeIdValue = deal.storeID;
          dealIdValue = deal.dealID;
        }
      }
    });
    setBestPrice(priceValue);
    setDealId(dealIdValue);
    return storeIdValue;
  };

  const checkStores = async (stores, storeId) => {
    stores.map((store) => {
      if (store.storeID === storeId) {
        setStoreName(store.storeName);
      }
    });
  };

  return (
    <a
      className="relative m-4 w-80 cursor-pointer"
      onClick={() => {
        setPage("Game");
      }}
    >
      <div
        className="flex flex-col justify-center text-white group w-80 rounded-3xl bg-zinc-800 drop-shadow-lg"
        onMouseEnter={fetchPrices}
      >
        <img
          src={game.background_image}
          className="object-cover w-full h-40 rounded-t-3xl"
        />
        <div className="font-Roboto">
          <div className="flex justify-end ">
            <GameScore score={game.metacritic}></GameScore>
          </div>
          <div className="">
            <div className="h-12 mb-6 ml-6 text-xl">{game.name}</div>
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
                  <div className="text-lg">Cheapest</div>
                </div>
                <div className="flex justify-between text-right align-middle">
                  <div>{storeName}</div>
                  {isLoading && "Loading..."}
                  {bestPrice !== "" && !isLoading && (
                    <a
                      className="p-2 bg-zinc-900 rounded-xl"
                      href={`${"https://www.cheapshark.com/redirect?dealID="}${dealId}`}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {bestPrice}$
                    </a>
                  )}
                  {bestPrice === "" && !isLoading && "Not Available"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
