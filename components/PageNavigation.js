import React, {useState} from 'react'

const PageNavigation = ({prevPageLink, setPrevPageLink, nextPageLink, setNextPageLink, setGames}) => {

    const [currentPageNumber, setCurrentPageNumber] = useState(1);

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
    }

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
    }

  return (
    <div className="basis-1/10">
        <div className='flex flex-row justify-center'>
            {(prevPageLink === null) ? (
                <button className='text-grey-200'>Prev Page</button>
            ) : (
                <button className='text-accent' onClick={handlePageDecrease}>Prev Page</button>
            )}
            <p className="pt-16 italic text-center font-roboto font-style: text-slate-50">Page {currentPageNumber}</p>
            <button className='text-accent' onClick={handlePageIncrease}>Next Page</button>
        </div>
    </div>
  )
}

export default PageNavigation