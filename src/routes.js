import React from "react"
import { BrowserRouter, Route } from 'react-router-dom'

import Blog from "./pages/Blog"
import Post from "./pages/Post"

const routes =  (
  <BrowserRouter>
    <div className="min-h-screen flex-1 bg-gray-200 p-4 flex justify-center items-center">
      <Route exact path="/" component={ Blog } />
      <Route path="/post/:id" component={ Post } />
    </div>
  </BrowserRouter>
);

export default routes