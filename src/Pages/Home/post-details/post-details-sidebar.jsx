import React from "react";
import { FaBookmark, FaShareAlt } from "react-icons/fa";
import Button from "../../../components/custom-button";

const PostDetailsSidebar = ({ title, location, image, description }) => {
  return (
    <div className="post_details_side p-3">
      <div className="d-flex justify-content-between">
        <div>
          <p className="fs-4 mb-1 blue_color"> {title} </p>
          <p className="text-secoundry mb-1 text-capitalize fw-bold">
            {location}
          </p>
        </div>
        <div className="d-flex align-items-center align-self-center">
          <div className="bookmark text-secoundry">
            <FaBookmark />
            <span className="ms-1">Save</span>
          </div>
          <div className="share ms-3 text-secoundry">
            <FaShareAlt />
            <span className="ms-1">Share</span>
          </div>
          <div className="share ms-3 text-secoundry">
            <Button className="text-uppercase fw-bold" primary>
              rent
            </Button>
          </div>
        </div>
      </div>
      <div className="post_image mt-4">
        <img
          src={image}
          className="img-fluid"
          style={{ borderRadius: ".8" }}
          alt=""
        />
      </div>
      <div className="description mt-3">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default PostDetailsSidebar;
