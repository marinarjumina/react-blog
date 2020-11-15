import React, { useState, useEffect } from "react";
import axios from "axios";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Loader from "../components/Loader";
import PostsList, { EmptyPostsLists } from "../components/PostsList";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
import { getPostById } from "../utils";

const POST_LIMIT = 5;

const Blog = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useLocalStorageState("posts");
  const [fetchMore, setFetchMore] = useState(false);

  useEffect(() => {
    const getPosts = async () => {
      setIsLoading(true);
      const { data = {} } = await axios.get("https://techcrunch.com/wp-json/wp/v2/posts");
      const result = data.slice(0, POST_LIMIT);
      setFetchMore(false);
      setPosts(result);
      setIsLoading(false);
    };

    const isInLocalStorage = JSON.parse(window.localStorage.getItem("posts"));

    if (!isInLocalStorage || fetchMore) {
      getPosts();
    }
  }, [fetchMore, setPosts]);

  const deletePost = (e, postId) => {
    const foundPost = getPostById(posts, postId);
    const newPosts = posts.filter((post) => post.id !== foundPost.id);
    setPosts(newPosts);

    e.preventDefault();
    e.stopPropagation();
  };

  const hasPosts = posts.length > 0;
  const isLoadMoreShown = posts.length < POST_LIMIT;

  return (
    <div className="bg-white w-full md:max-w-5xl rounded-3xl shadow-lg">
      <Header />
      {isLoading && <Loader />}
      {!isLoading && !hasPosts && <EmptyPostsLists />}
      {!isLoading && hasPosts && <PostsList posts={posts} deletePost={deletePost} />}
      {isLoadMoreShown && <Footer isLoading={isLoading} setFetchMore={() => setFetchMore(true)} />}
    </div>
  );
};

export default Blog;
