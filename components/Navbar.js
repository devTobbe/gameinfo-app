export default function Navbar() {
  return (
    <div className="relative">
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
        <div className="container flex flex-wrap items-start space-x-4 ">
          <a className="text-white text-l hover:text-sky-700" href="#">Item1</a>
          <a className="text-white text-m hover:font-accent" href="#">Item2</a>
          <a className="text-white text-m hover:text-sky-700" href="#">Item3</a>
        </div>
      </nav>
    </div>
  );
}
