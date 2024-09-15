import React from "react";
import { GlobalContextValue } from "../context";

const MainSection = () => {
  const { name, image } = GlobalContextValue();

  return (
    <>
      <div className="wrapper">
        <div className="inner-div">
          <div className="about-me">
            <h1>THIS IS HOME PAGE</h1>
            <br />
            <h2 className="title">{name}</h2>
            <p className="descrip">
              I am <b>{name}</b> , have 1 year of experience bulding and
              designing websites. Currently, I love to work web application
              using technologies like Javascript, React, Bootstrap, Redux and
              Firebase.
            </p>
            <button className="btn">JOIN US</button>
          </div>

          <div className="my-img">
            <img src={image} alt="myimg"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSection;
