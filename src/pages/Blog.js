import React, { useState, useEffect } from "react";
import axios from "axios";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Loader from "../components/Loader";
import PostsList, { EmptyPostsLists } from "../components/PostsList";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const Blog = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useLocalStorageState("posts");

  const deletePost = (e, idx) => {
    const selectedItem = posts[idx];
    const detectPost = posts.filter((item) => item !== selectedItem);
    setPosts(detectPost);

    e.preventDefault();
    e.stopPropagation();
  };

  useEffect(() => {
    const getPosts = async () => {
      setIsLoading(true);
      const { data = {} } = await axios.get(
        "https://techcrunch.com/wp-json/wp/v2/posts"
      );
      const result = data.slice(0, 5);

      setPosts(result);
      setIsLoading(false);
    };

    getPosts();
  }, [setPosts]);

  const hasPosts = posts && posts.length > 0;

  return (
    <>
      <div className="bg-white w-full md:max-w-5xl rounded-3xl shadow-lg">
        <Header />
        {isLoading && <Loader />}
        {!isLoading && !hasPosts && <EmptyPostsLists />}
        {!isLoading && hasPosts && (
          <PostsList posts={posts} deletePost={deletePost} />
        )}
        <Footer />
      </div>
    </>
  );
};

export default Blog;
