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
        <div className="bg-sky-900/50">
          <a className="active" href="">Home</a>
        </div>
        <div className="px-16 py-16">
          <div className="py-8 text-center basis-2/5 font-rubrik">
            <h1 class="text-slate-50 text-2xl">Games</h1>
            <h4 class="text-sky-400 text-1xl">Featured in May</h4>
          </div>
          <div class="topnav text-center px-4 py-4">
            <input type="text " placeholder="Search..."></input>
          </div>
          <div className="basis-1/2">
            <div className="grid grid-cols-1 gap-4">
                {games.map((game) => (
                  <GameCard key={game.id} game={game}></GameCard>
                ))}
            </div>
          </div>
          <div className="basis-1/10">
            <p class="pt-16 font-roboto font-style: italic text-slate-50 text-center">Page 1</p>
          </div>
        </div>
      </main>
  );
}
