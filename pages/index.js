export async function getStaticProps() {

  const res = await fetch('https://api.rawg.io/api/games?key=dc469c23c1bb4c1bbb5d9562b46e5082&page=1&page_size=100');
  const data = await res.json();
  const games = data.results;

  return {
    props: { games }
  }
}

export default function Home( {games} ) {

  return (
    <ul>
      {games.map((game) => (
        <li>{game.name}</li>
      ))}
    </ul>
  );
}
