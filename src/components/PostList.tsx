import { useState } from "react";
import { usePosts } from "../hooks/usePosts";

const PostList = () => {
  const [userId, setUserId] = useState<number>();
  const [page, setPage] = useState(1);
  const pageSize = 10;
  const { data: posts, error, isLoading } = usePosts({ page, pageSize });

  if (isLoading) return <p>Loading.........</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <div>
      PostList
      <br />
      <select
        onChange={(event) => setUserId(parseInt(event.target.value))}
        className="form-select mb-3"
      >
        <option value=""></option>
        <option value="1">User 1</option>
        <option value="2">User 2</option>
        <option value="3">User 3</option>
      </select>
      <ul className="list-group">
        {posts?.map((post) => (
          <li className="list-group-item" key={post.id}>
            <div>
              {post.title}
              <br /> {post.body}
              <br />
            </div>
          </li>
        ))}
      </ul>
      <button
        className="btn btn-secondary  me-2"
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
      >
        Previous
      </button>
      <button onClick={() => setPage(page + 1)} className="btn btn-secondary ">
        Next
      </button>
    </div>
  );
};

export default PostList;
