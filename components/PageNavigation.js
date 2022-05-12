import React, { useState } from "react";

const PageNavigation = ({
  prevPageLink,
  setPrevPageLink,
  nextPageLink,
  setNextPageLink,
  setGames,
  currentPageNumber,
  setCurrentPageNumber
}) => {

  const handlePageDecrease = async (e) => {
    try {
      const gameResponse = await fetch(prevPageLink);
      if (!gameResponse.ok) throw Error("Did not receive games.");
      const games = await gameResponse.json();
      setGames(games.results);
      setPrevPageLink(games.previous);
      setNextPageLink(games.next);
      setCurrentPageNumber(currentPageNumber - 1);
    } catch (err) {
      console.log(err.message);
    }
  };

  const handlePageIncrease = async (e) => {
    try {
      const gameResponse = await fetch(nextPageLink);
      if (!gameResponse.ok) throw Error("Did not receive games.");
      const games = await gameResponse.json();
      setGames(games.results);
      setPrevPageLink(games.previous);
      setNextPageLink(games.next);
      setCurrentPageNumber(currentPageNumber + 1);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="mb-4 basis-1/10">
      <div className="flex flex-row justify-center">
        {prevPageLink === null ? (
          <button className="h-6 text-accent">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 stroke-accent"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        ) : (
          <button className="h-6 text-accent" onClick={handlePageDecrease}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 stroke-accent"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        )}
        <p className="italic text-center  font-roboto font-style: text-slate-50">
          Page {currentPageNumber}
        </p>
        <button className="h-6 text-accent" onClick={handlePageIncrease}>
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
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PageNavigation;
