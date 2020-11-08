import React, { useState, useEffect } from "react";
import Axios from "axios";

import logo from './images/logo.svg';

const App = () => {
  const [postsLoaded, setPostsLoaded] = useState(false);
  const [posts, setPosts] = useState([]);


  const getPosts = () => {
    Axios.get("https://techcrunch.com/wp-json/wp/v2/posts").then(response => {
      setPosts(response.data.slice(0, 5));
      setPostsLoaded(true)
    });
  }

  const deletePost = (idx) => {
    const selectedItem = posts[idx]
    const detectPost = posts.filter((item) => item !== selectedItem)
    setPosts(detectPost)
  }

  useEffect(() => getPosts(), [setPosts]);

  return (
    <>
      <div className="min-h-screen flex-1 bg-gray-200 p-4 flex justify-center items-center">
        <div className="bg-white w-full md:max-w-5xl rounded-3xl shadow-lg">
          <div className="h-20 flex justify-between items-center border-b border-gray-200 my-4 mx-6">
            <div className="flex items-center">
              <img src={logo} className="h-16 w-16" alt="logo" />
              <h1 className="text-2xl font-semibold text-gray-600">React blog</h1>
            </div>
            <div className="flex flex-col items-end pb-3">
              <h5 className="text-sm font-semibold text-gray-600 pb-1">Posts read:</h5>
              <div className="flex flex-col items-end pr-1">
                <p className="text-xs font-semibold text-gray-500">1 daily</p>
                <p className="text-xs font-semibold text-gray-500">1 weekly</p>
              </div>
            </div>
          </div>
          <div className="px-6">
            {postsLoaded && posts && posts.length > 0 && posts.map((post, idx) => {
              return (
                <div key={post.id} className="flex justify-between items-center h-16 p-4 my-3 rounded-lg border border-gray-100 shadow">
                  <div className="text-base font-semibold text-gray-600" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                  <div>
                    <button onClick={() => deletePost(idx)} className="bg-red-400 hover:bg-red-500 p-2 rounded-full shadow flex justify-center items-center">
                      <svg className="text-white w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
              );
            })}
            {postsLoaded && posts <= 0 && <div className="text-base font-semibold text-gray-600 p-4 my-3 flex justify-center">
              Ups... the list in empty, press 'Get new posts!' button to get a new bunch of the fresh posts
            </div>}
            {!postsLoaded && <div className="text-base font-semibold text-gray-600 p-4 my-3 flex justify-center items-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Loading...
            </div>}
          </div>
          <div onClick={getPosts} className="flex justify-center p-6">
            <button className="py-4 px-10 bg-indigo-500 hover:bg-indigo-400 rounded-lg shadow text-sm font-medium uppercase text-white">Get new posts!</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
