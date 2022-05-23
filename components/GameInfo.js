import React from "react";

const GameInfo = () => {
  return (
    <div class="-z-50 flex min-h-screen flex-col justify-start overflow-hidden bg-zinc-900 py-6 text-white">
      <div class="flex flex-col items-center space-y-1">
        <div class="w-100 overflow absolute h-[300px] overflow-hidden blur-lg">
          <img
            class="w-100 h-100 object-cover blur-lg"
            src="https://cdn-ext.fanatical.com/production/product/1280x720/d2097e15-1730-4ce9-aa9b-6682e4d48741.jpeg"
          />
        </div>
        <img
          class="z-10 h-[280px] w-[208px] rounded-2xl"
          src="https://m.media-amazon.com/images/M/MV5BOTY0NmQxYzktYzFhNi00OGJkLTg4MjEtYTUyZjAzMDBkYjI3XkEyXkFqcGdeQXVyMTk2OTAzNTI@._V1_FMjpg_UX1000_.jpg"
        />
        <h1 class="text-white">BORDERLANDS 2</h1>
        <p class="text-white">GEARBOX</p>
        <p class="rounded-lg border-2 border-green-400 bg-green-400/10 px-2 text-green-400">
          89
        </p>
        <div class="flex w-[100%] max-w-[570px] flex-col items-center space-y-4">
          <div class="flex w-[80%] flex-row justify-between">
            <p class="uppercase">released</p>
            <p>2012-09-18</p>
          </div>
          <div class="flex w-[80%] flex-row justify-between">
            <p class="uppercase">genres</p>
            <p class="capitalize">action, shooter, RPG</p>
          </div>
          <div class="flex w-[80%] flex-row justify-between">
            <p class="uppercase">cheapest</p>
            <div class="bg-zinc-900 capitalize text-white">19.99$</div>
          </div>
          <h1>GALLERY PLACEHOLDER</h1>
          <h1 class="capitalize">information:</h1>
          <div class="flex w-[80%] flex-row items-center justify-between">
            <p class="uppercase">platform</p>
            <p class="w-40 text-right capitalize">
              PC, Xbox One, PS5, Ninetendo Switch
            </p>
          </div>
          <div class="flex w-[80%] flex-row items-center justify-between">
            <p class="uppercase">languages</p>
            <p class="w-40 text-right capitalize">
              English, Dutch, Spansih, German, French
            </p>
          </div>
          <div class="flex w-[80%] flex-row items-center justify-between">
            <p class="uppercase">publisher</p>
            <p class="text-right capitalize">2K Games</p>
          </div>
          <p class="uppercase">similar games placeholder</p>
        </div>
      </div>
    </div>
  );
};

export default GameInfo;
