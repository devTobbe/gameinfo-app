export default function GameCard({ title }) {
  return (
    <div class="relative">
      <div class="flex w-80 flex-col justify-center rounded-3xl bg-zinc-800  text-white">
        <img
          src="https://www.creocommunity.es/wp-content/uploads/2022/03/La-actualizacion-de-proxima-generacion-de-Grand-Theft-Auto-5.jpg"
          class="rounded-t-3xl object-cover w-full h-40"
        />
        <div class="">
          <div class="flex justify-end">
            <div class="border inline-flex px-1 rounded-lg border-green-400 text-green-400 bg-green-400/[0.1] mt-1 mr-1">
              92
            </div>
          </div>
          <div class="">
            <div class=" text-xl mb-6 ml-6">GRAND THEFT AUTO 5</div>
            <div class="mx-6 flex justify-between mb-14 ">
              <div>
                <div>Release</div>
                <div>Genres</div>
              </div>
              <div class="text-right">
                <div>YEAR</div>
                <div>GENRE 1, GENRE 2</div>
              </div>
            </div>
            <div class="mx-6 mb-4">
              <div>
                <div>Cheapest</div>
              </div>
              <div class="text-right flex justify-between align-middle">
                <div>STORE:</div>
                <div class="bg-zinc-900 p-2 rounded-xl">BUTTON</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
