import React from "react";
import PostCard from "../../../components/post-card";

const Posts = ({ posts }) => {
  return (
    <div className="row">
      {posts.map((post) => (
        <div key={post.id} className="col-md-4 col-sm-12 pt-4">
          <PostCard {...post} />
        </div>
      ))}
    </div>
  );
};
export default Posts;
