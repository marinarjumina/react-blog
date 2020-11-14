import React from "react";
import { Link } from "react-router-dom";

const PostItem = ({ post, index, deletePost }) => {
  const url = `/post/${post.id}`;

  return (
    <Link
      to={url}
      className="flex justify-start items-center h-16 px-4 my-3 rounded-lg border border-gray-100 shadow"
    >
      <div className="mr-4">
        <div className="p-2 bg-teal-400 text-xs text-white font-bold uppercase rounded-lg">
          Read
        </div>
      </div>
      <div className="flex justify-between items-center w-full">
        <div
          className="text-base font-semibold text-gray-600 cursor-pointer"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />
        <button
          onClick={(e) => deletePost(e, index)}
          className="bg-red-400 hover:bg-red-500 p-2 rounded-full shadow flex justify-center items-center"
        >
          <svg
            className="text-white w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </Link>
  );
};

export const EmptyPostsLists = () => {
  return (
    <div className="text-base font-semibold text-gray-600 p-4 my-3 flex justify-center">
      Ups... the list in empty, press 'Get new posts!' button to get a new bunch
      of the fresh posts
    </div>
  );
};

const PostsList = ({ posts, deletePost }) => {
  return (
    <div className="px-6">
      {posts.map((post, idx) => {
        return (
          <PostItem
            key={post.id}
            post={post}
            index={idx}
            deletePost={deletePost}
          />
        );
      })}
    </div>
  );
};

export default PostsList;
