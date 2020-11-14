import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const getPost = async () => {
      const { data = {} } = await axios.get(
        `https://techcrunch.com/wp-json/wp/v2/posts/${id}`
      );
      setPost(data);
    };

    getPost();
  }, [id]);

  return (
    <>
      {post && (
        <div
          className="bg-white w-full md:max-w-5xl rounded-3xl shadow-lg"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
      )}
    </>
  );
};

export default Post;
