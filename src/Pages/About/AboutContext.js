import React, { createContext, useState } from "react";
import AboutDetail from "./AboutDetail";
const formDataContext = createContext();

const HomeContext = () => {
  return (
    <>
      <formDataContext.Provider value={{}}>
        <AboutDetail />
      </formDataContext.Provider>
    </>
  );
};

export { formDataContext };
export default HomeContext;
