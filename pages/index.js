import GameCard from "../components/GameCard";
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
export async function getStaticProps() {

  const res = await fetch('https://api.rawg.io/api/games?key=dc469c23c1bb4c1bbb5d9562b46e5082&platforms=4');
  const data = await res.json();


  return {
    props: { 
      count: data.count,
      games: data.results,
      prevPage: data.previous,
      nextPage: data.next
    }
  }
}

export default function Home( {count, games, prevPage, nextPage} ) {

  return (
    
      <main className="flex flex-col bg-zinc-900">
        <a id="top"></a>
        <div className="px-16 py-16">
          <div className="py-8 text-center basis-2/5 font-rubrik">
            <h1 className="text-2xl text-slate-50">Games</h1>
            <h4 className="text-sky-400 text-1xl">Featured in May</h4>
          </div>
          <div className="flex justify-center">
          <div className="mb-3 xl:w-96">
            <div className="relative flex flex-wrap items-stretch w-full mb-4 input-group">
              <input type="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2"></input>
              <button className="btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
          <div className="basis-1/2">
            <div className="grid grid-cols-3 gap-4">
                {games.map((game) => (
                  <GameCard key={game.id} game={game}></GameCard>
                ))}
            </div>
          </div>
          <div className="basis-1/10">
            <p className="pt-16 italic text-center font-roboto font-style: text-slate-50">Page 1</p>
          </div>
        </div>
        <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
            <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                <a href="#top">Back to top</a>
                </li>
            </ul>
        </footer>
      </main>
  );
}
