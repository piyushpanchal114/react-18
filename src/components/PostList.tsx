import { useState } from "react";
import { usePosts } from "../hooks/usePosts";
import React from "react";

const PostList = () => {
  const pageSize = 10;
  const {
    data: posts,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
  } = usePosts({ pageSize });

  if (isLoading) return <p>Loading.........</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <div>
      PostList
      <br />
      <ul className="list-group">
        {posts.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.map((post) => (
              <li className="list-group-item" key={post.id}>
                {post.title}
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>
      <button
        onClick={() => fetchNextPage()}
        disabled={isFetchingNextPage}
        className="btn btn-secondary "
      >
        {isFetchingNextPage ? "Loading..." : "Load More"}
      </button>
    </div>
  );
};

export default PostList;
