import React from "react";
import Navbar from "./containers/NavbarContainer";
import NewsList from "./containers/NewsListContainer";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <NewsList />
      </Router>
    </div>
  );
}
