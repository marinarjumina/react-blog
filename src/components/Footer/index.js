import React from "react";

const Footer = ({ isLoading, setFetchMore }) => {
  return (
    <div onClick={setFetchMore} className="flex justify-center px-6 pb-6">
      <button
        style={{ pointerEvents: isLoading ? "none" : "auto" }}
        className="py-4 px-10 bg-indigo-500 hover:bg-indigo-400 rounded-lg shadow text-sm font-medium uppercase text-white"
      >
        Get new posts!
      </button>
    </div>
  );
};

export default Footer;
