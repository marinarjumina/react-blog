import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
import { isEmpty } from "lodash";
import { getPostById, updateStats } from "../utils";

const Post = () => {
  const { id } = useParams();
  const [posts] = useLocalStorageState("posts");
  const [stats, setStats] = useLocalStorageState("stats", {});
  const post = getPostById(posts, id);

  useEffect(() => {
    if (!isEmpty(post)) {
      const newStats = updateStats(stats, post.id);
      setStats(newStats);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isEmpty(post)) {
    return null;
  }

  return (
    <div
      className="bg-white w-full md:max-w-5xl rounded-3xl shadow-lg"
      dangerouslySetInnerHTML={{ __html: post.content.rendered }}
    />
  );
};

export default Post;
