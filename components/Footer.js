import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="p-4 bg-zinc-800 flex justify-between">
        <a
          className="text-white font-Roboto hover:text-accent mx-2"
          href="#top"
        >
          Back to top
        </a>
        <div className="text-zinc-600 mx-2">
          Made by <a>Samuel Nilsson</a>, <a>Linus Kullman</a> and{" "}
          <a>Tobias Bergström</a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
