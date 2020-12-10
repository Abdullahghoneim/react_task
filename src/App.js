import React from "react";
import Navbar from "./components/navbar";
import Home from "./Pages/Home";
import "./app.css";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/footer";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <main className="page-container">
          <div className="content-wrap">
            <Home />
          </div>
          <Footer />
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
