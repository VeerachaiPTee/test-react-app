import React from "react";
import { Routes, Route } from "react-router-dom";
import * as Pages from "./RouterComponent";
import { IndexP, AboutP } from "../../utils/PathConfig";

const Router = () => {
  const routes = [];


  return (
    <Routes>
      {/* <Route path="/" element={<Pages.Debug />} /> */}
      {routes}
      <Route path={IndexP} element={<Pages.IndexPage />} />
      <Route path={AboutP} element={<Pages.AboutPage />} />
      <Route path="*" element={<Pages.Index />} />
    </Routes>
  );
};

export default Router;
