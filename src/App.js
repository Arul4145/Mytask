import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./Component/Dashboard/dash";
import Post from "./Component/Post/post";


export default function App() {
 
  return (
    <div className="App">
      <div className="sidebar">
        <h2>Menu</h2>
        <ul>
          <li><Link to="/"> Home </Link></li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="post/:id" element={<Post />} />
      </Routes>
    </div>
  );
}