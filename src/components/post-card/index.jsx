import React from "react";
import "./post-card.css";
import { FaBookmark, FaShareAlt } from "react-icons/fa";
import Button from "../custom-button";
import { Link } from "react-router-dom";
const PostCard = ({
  title,
  image,
  location,
  description,
  id,
  selected,
  setSelected,
}) => {
  return (
    <Link
      className={`card shadow-sm ${selected ? "selected" : ""} `}
      to={`/post/${id}`}
      onClick={() => setSelected && setSelected(id)}
      style={{ width: "100%", borderRadius: "1rem" }}
    >
      <img
        style={{
          borderRadius: "1rem",
          height: "13rem",
        }}
        src={image}
        className="card-img-top round"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title"> {title} </h5>
        <p className="text-secoundry mb-1 text-capitalize fw-bold">
          {location}
        </p>
        <p
          className="card-text border-bottom pb-2"
          style={{ fontSize: ".9rem" }}
        >
          {description}
        </p>
        <div className="card_footer" onClick={(e) => e.preventDefault()}>
          <div className="d-flex justify-content-between">
            <div className="d-flex align-self-center">
              <div className="bookmark text-secoundry">
                <FaBookmark />
                <span className="ms-1">Save</span>
              </div>
              <div className="share ms-3 text-secoundry">
                <FaShareAlt />
                <span className="ms-1">Share</span>
              </div>
            </div>
            <div>
              <Button className="text-uppercase fw-bold" primary>
                {" "}
                rent{" "}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
