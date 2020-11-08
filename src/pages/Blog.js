import React, { useState, useEffect } from "react"
import Axios from "axios"

import Footer from '../components/Footer'
import Header from '../components/Header'
import Loader from '../components/Loader'
import PostsList from '../components/PostsList'

const Blog = () => {
  const [postsLoaded, setPostsLoaded] = useState(false)
  const [posts, setPosts] = useState([])


  const getPosts = () => {
    setPostsLoaded(false)
    Axios.get("https://techcrunch.com/wp-json/wp/v2/posts").then(response => {
      setPosts(response.data.slice(0, 5))
      setPostsLoaded(true)
    });
  }

  const deletePost = (e, idx) => {
    const selectedItem = posts[idx]
    const detectPost = posts.filter((item) => item !== selectedItem)
    setPosts(detectPost)

    e.preventDefault()
    e.stopPropagation()
  }

  useEffect(() => getPosts(), [setPosts])

  return (
    <>
      <div className="bg-white w-full md:max-w-5xl rounded-3xl shadow-lg">
        <Header />
        <PostsList posts={posts} deletePost={deletePost} postsLoaded={postsLoaded} />
        <Loader loading={postsLoaded} />
        <Footer getPosts={getPosts} />
      </div>
    </>
  )
}

export default Blog
