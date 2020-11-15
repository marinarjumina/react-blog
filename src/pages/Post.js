import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
import { isEmpty } from "lodash";
import { getPostById, updateStats } from "../utils";
import { useHistory } from "react-router-dom";

const Post = () => {
  const { id } = useParams();
  const [posts] = useLocalStorageState("posts");
  const [stats, setStats] = useLocalStorageState("stats", {});
  const post = getPostById(posts, id);

  const history = useHistory();

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
    <div className="bg-white w-full md:max-w-5xl rounded-3xl shadow-lg">
      <div className="flex justify-between items-center mx-6">
        <div className="flex flex-wrap lg:flex-no-wrap items-center border-b border-gray-200 py-4">
          <div className="mr-4 lg:mb-0 mb-4">
            <button
              onClick={() => history.goBack()}
              className="w-20 p-2 bg-gray-800 hover:bg-gray-700 rounded-lg shadow text-sm font-medium uppercase text-white"
            >
              ← Back
            </button>
          </div>
          <h1
            className="text-lg font-semibold text-gray-600"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
        </div>
      </div>
      <div className="px-8 py-6 text-sm" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </div>
  );
};

export default Post;
