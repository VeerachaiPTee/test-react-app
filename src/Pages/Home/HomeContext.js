import React, { createContext, useState } from "react";
import HomeDetail from "./HomeDetail";
const formDataContext = createContext();

const HomeContext = () => {
  return (
    <>
      <formDataContext.Provider value={{}}>
        <HomeDetail />
      </formDataContext.Provider>
    </>
  );
};
export { formDataContext };
export default HomeContext;
