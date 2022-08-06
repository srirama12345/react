import { Component } from "react";
import Resource from "./Resource.js";
import Header from "./Header.js";
import Request from "./Request.js";
import User from "./User.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <Header />

    <Routes>
      <Route exact path="path1" element={<Resource />} />
      <Route exact path="path2" element={<Request />} />
      <Route exact path="path3" element={<User />} />
    </Routes>
  </BrowserRouter>
);
export default App;
