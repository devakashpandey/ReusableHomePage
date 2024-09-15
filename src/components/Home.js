import React, { useEffect } from "react";
import MainSection from "./MainSection";
import { GlobalContextValue } from "../context";

const Home = () => {
  const { updateHomePage } = GlobalContextValue();

  useEffect(() => {
    updateHomePage();
  }, []);

  return (
    <>
      <MainSection />
    </>
  );
};

export default Home;
