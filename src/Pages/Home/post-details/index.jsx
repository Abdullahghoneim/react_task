import React, { useState } from "react";
import PostCard from "../../../components/post-card";
import { useParams } from "react-router-dom";
import PostDetailsSidebar from "./post-details-sidebar";
const PostDetails = ({ posts }) => {
  const params = useParams();
  const [selectedPost, setSelectedPost] = useState(+params.id);
  const getPost = () => {
    const post = posts.filter((post) => post.id === selectedPost);
    return post[0];
  };
  return (
    <div className="post_details_wraper">
      <div className="row">
        <div
          className="col-md-4"
          style={{ maxHeight: "100vh", overflowY: "scroll" }}
        >
          <div className="row">
            {posts.map((post) => (
              <div className="col-12 mt-3">
                <PostCard
                  setSelected={(e) => setSelectedPost(e)}
                  {...post}
                  selected={selectedPost === post.id}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-8">
          <div className="bg-white h-100 ">
            <PostDetailsSidebar {...getPost()} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
