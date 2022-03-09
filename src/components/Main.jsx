import React from "react";
import { Routes, Route } from "react-router-dom";

import AddAsset from "./AddAsset";
import AllAssets from "./AllAssets";
import BranchAssets from "./BranchAssets";
import Update from "./Update";
import Home from "./Home";

const Main = () => {
  return (
    <Routes>
      {" "}
      {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path="/" element={<Home />} />
      <Route exact path="/Home" element={<Home />} />
      <Route exact path="/AddAsset" element={<AddAsset />} />
      <Route exact path="/AllAssets" element={<AllAssets />} />
      <Route exact path="/BranchAssets" element={<BranchAssets />} />
      <Route exact path="/Update" element={<Update />} />
    </Routes>
  );
};

export default Main;
