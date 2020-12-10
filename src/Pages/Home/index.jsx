import React from "react";
import { Switch, Route } from "react-router-dom";
import Posts from "./posts";
import PostDetails from "./post-details";
const posts = [
  {
    id: 1,
    image:
      "https://cdn.pixabay.com/photo/2016/11/18/17/20/couch-1835923_960_720.jpg",
    title: "Cercacar Laborataries inc.",
    location: "maadi , cairo",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
  },
  {
    id: 2,
    image:
      "https://cdn.pixabay.com/photo/2016/11/18/17/20/couch-1835923_960_720.jpg",

    title: "Cercacar Laborataries inc.",
    location: "maadi , cairo",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
  },

  {
    id: 3,

    image:
      "https://cdn.pixabay.com/photo/2016/11/18/17/20/couch-1835923_960_720.jpg",

    title: "Cercacar Laborataries inc.",
    location: "maadi , cairo",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
  },

  {
    id: 4,
    image:
      "https://cdn.pixabay.com/photo/2016/11/18/17/20/couch-1835923_960_720.jpg",

    title: "Cercacar Laborataries inc.",
    location: "maadi , cairo",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
  },

  {
    id: 5,
    image:
      "https://cdn.pixabay.com/photo/2016/11/18/17/20/couch-1835923_960_720.jpg",

    title: "Cercacar Laborataries inc.",
    location: "maadi , cairo",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
  },

  {
    id: 6,
    image:
      "https://cdn.pixabay.com/photo/2016/11/18/17/20/couch-1835923_960_720.jpg",

    title: "Cercacar Laborataries inc.",
    location: "maadi , cairo",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
  },
];

const Home = () => {
  return (
    <div className="container">
      <div className="pt-3">
        <Switch>
          <Route exact path="/" component={() => <Posts posts={posts} />} />
          <Route
            exact
            path="/post/:id"
            component={() => <PostDetails posts={posts} />}
          />
        </Switch>
      </div>
    </div>
  );
};

export default Home;
