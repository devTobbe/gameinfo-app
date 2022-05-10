import GameItem from "../components/GameItem";

export async function getStaticProps() {

  const res = await fetch('https://api.rawg.io/api/games?key=dc469c23c1bb4c1bbb5d9562b46e5082');
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
      <main className="flex flex-col">
          <div className="basis-2/5">
            <h1>Games</h1>
          </div>
          <div className="basis-1/2">
            <div className="grid grid-cols-2 gap-4 basis-7/12">
                {games.map((game) => (
                  <GameItem key={game.id} game={game}></GameItem>
                ))}
            </div>
          </div>
          <div className="basis-1/10">
            <p>Page 1</p>
          </div>
      </main>
  );
}
