import React, { useState, useEffect } from "react"
import Axios from "axios"

import Footer from './components/Footer'
import Header from './components/Header'
import Loader from './components/Loader'
import PostsList from './components/PostsList'

const Layout = ({children}) => {
  return (
    <div className="min-h-screen flex-1 bg-gray-200 p-4 flex justify-center items-center">
      {children}
    </div>
  )
}

const Card = ({children}) => {
  return (
    <div className="bg-white w-full md:max-w-5xl rounded-3xl shadow-lg">
      {children}
    </div>
  )
}

const App = () => {
  const [postsLoaded, setPostsLoaded] = useState(false)
  const [posts, setPosts] = useState([])


  const getPosts = () => {
    setPostsLoaded(false)
    Axios.get("https://techcrunch.com/wp-json/wp/v2/posts").then(response => {
      setPosts(response.data.slice(0, 5))
      setPostsLoaded(true)
    });
  }

  const deletePost = (idx) => {
    const selectedItem = posts[idx]
    const detectPost = posts.filter((item) => item !== selectedItem)
    setPosts(detectPost)
  }

  useEffect(() => getPosts(), [setPosts])

  return (
    <Layout>
      <Card>
        <Header />
        <PostsList posts={posts} deletePost={deletePost} postsLoaded={postsLoaded} />
        <Loader loading={postsLoaded} />
        <Footer getPosts={getPosts}/>
      </Card>
    </Layout>
  );
}

export default App
