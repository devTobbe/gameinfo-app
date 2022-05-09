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
      <main>
        <h1 className="text-lg">We have {count} games.</h1> 
          <ul>
            {games.map((game) => (
              <li key={game.id}>{game.name}</li>
            ))}
          </ul>
      </main>
  );
}
