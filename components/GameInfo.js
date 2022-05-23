import React from "react";

const GameInfo = () => {
  return (
    <div className="flex flex-col justify-start min-h-screen py-6 overflow-hidden text-white -z-50 bg-zinc-900">
      <div className="flex flex-col items-center space-y-1">
        <div className="w-100 overflow absolute h-[300px] overflow-hidden blur-lg">
          <img
            className="object-cover w-100 h-100 blur-lg"
            src="https://cdn-ext.fanatical.com/production/product/1280x720/d2097e15-1730-4ce9-aa9b-6682e4d48741.jpeg"
          />
        </div>
        <img
          className="z-10 h-[280px] w-[208px] rounded-2xl"
          src="https://m.media-amazon.com/images/M/MV5BOTY0NmQxYzktYzFhNi00OGJkLTg4MjEtYTUyZjAzMDBkYjI3XkEyXkFqcGdeQXVyMTk2OTAzNTI@._V1_FMjpg_UX1000_.jpg"
        />
        <h1 className="text-white">BORDERLANDS 2</h1>
        <p className="text-white">GEARBOX</p>
        <p className="px-2 text-green-400 border-2 border-green-400 rounded-lg bg-green-400/10">
          89
        </p>
        <div className="flex w-[100%] max-w-[570px] flex-col items-center space-y-4">
          <div className="flex w-[80%] flex-row justify-between">
            <p className="uppercase">released</p>
            <p>2012-09-18</p>
          </div>
          <div className="flex w-[80%] flex-row justify-between">
            <p className="uppercase">genres</p>
            <p className="capitalize">action, shooter, RPG</p>
          </div>
          <div className="flex w-[80%] flex-row justify-between">
            <p className="uppercase">cheapest</p>
            <div className="text-white capitalize bg-zinc-900">19.99$</div>
          </div>
          <h1>GALLERY PLACEHOLDER</h1>
          <h1 className="capitalize">information:</h1>
          <div className="flex w-[80%] flex-row items-center justify-between">
            <p className="uppercase">platform</p>
            <p className="w-40 text-right capitalize">
              PC, Xbox One, PS5, Ninetendo Switch
            </p>
          </div>
          <div className="flex w-[80%] flex-row items-center justify-between">
            <p className="uppercase">languages</p>
            <p className="w-40 text-right capitalize">
              English, Dutch, Spansih, German, French
            </p>
          </div>
          <div className="flex w-[80%] flex-row items-center justify-between">
            <p className="uppercase">publisher</p>
            <p className="text-right capitalize">2K Games</p>
          </div>
          <p className="uppercase">similar games placeholder</p>
        </div>
      </div>
    </div>
  );
};

export default GameInfo;
