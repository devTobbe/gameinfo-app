import React, {useState, useEffect} from 'react';

export default function GameCard({game}) {

    const [bestPrice, setBestPrice] = useState('');
    const [storeId, setStoreId] = useState('');
    const [storeName, setStoreName] = useState('');

    useEffect(() => {
        const fetchPrices = async () => {
            try {
                const response = await fetch(`${'https://www.cheapshark.com/api/1.0/deals?title='}${game.name}`);
                if (!response.ok) throw Error('Did not receive prices.');
                const deals = await response.json();
                deals.map((deal) => {
                    if (deal.isOnSale === "1") {
                        if (deal.salePrice < bestPrice || bestPrice === '') {
                            setBestPrice(deal.salePrice);
                            setStoreId(deal.storeID);
                        }
                    }
                    else {
                        if (deal.normalPrice < bestPrice) {
                            setBestPrice(deal.normalPrice);
                            setStoreId(deal.storeID);
                        }
                    }
                });
            } catch (err) {
                console.log(err.message);
            }
        }

        (async () => await (fetchPrices()))();

    }, []);

    useEffect(() => {
        const fetchStore = async () => {
            try {
                const response = await fetch('https://www.cheapshark.com/api/1.0/stores');
                if (!response.ok) throw Error('Did not receive prices.');
                const stores = await response.json();
                stores.map((store) => {
                    if (store.storeID === storeId) {
                        setStoreName(store.storeName);
                    }
                });
            } catch (err) {
                console.log(err.message);
            }
        }

        (async () => await (fetchStore()))();

    }, []);

  return (
    <div className="relative">
      <div className="flex flex-col justify-center text-white w-80 rounded-3xl bg-zinc-800 drop-shadow-lg">
        <img
          src={game.background_image}
          className="object-cover w-full h-40 rounded-t-3xl"
        />
        <div className="">
          <div className="flex justify-end">
            <div className="border inline-flex px-1 rounded-lg border-green-400 text-green-400 bg-green-400/[0.1] mt-1 mr-1">
              {game.metacritic}
            </div>
          </div>
          <div className="">
            <div className="mb-6 ml-6 text-xl ">{game.name}</div>
            <div className="flex justify-between mx-6 mb-14 ">
              <div>
                <div>Release</div>
                <div>Genres</div>
              </div>
              <div className="text-right">
                <div>{game.released}</div>
                <div>GENRE 1, GENRE 2</div>
              </div>
            </div>
            <div className="mx-6 mb-4">
              <div>
                <div>Cheapest</div>
              </div>
              <div className="flex justify-between text-right align-middle">
                <div>STORE: {storeName}</div>
                <button className="p-2 bg-zinc-900 rounded-xl">{bestPrice}$</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
