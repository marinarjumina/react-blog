import React from "react";

const Footer = ({ getPosts }) => {
  return (
    <div onClick={getPosts} className="flex justify-center p-6">
      <button className="py-4 px-10 bg-indigo-500 hover:bg-indigo-400 rounded-lg shadow text-sm font-medium uppercase text-white">
        Get new posts!
      </button>
    </div>
  );
};

export default Footer;
