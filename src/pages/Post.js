import React, { useState, useEffect } from "react"
import Axios from "axios"
import { useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams()
  const [post, setPost] = useState(null)

  useEffect(() => {
    Axios.get(`https://techcrunch.com/wp-json/wp/v2/posts/${id}`).then(response => {
      setPost(response.data);
    });
  }, [setPost, id])

  return (
    <>
      {post && <div className="bg-white w-full md:max-w-5xl rounded-3xl shadow-lg" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />}
    </>
  )
}

export default Post
