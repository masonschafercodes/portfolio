import React from "react";
import "../App.css";

const ThingsILove = (props) => {
  return (
    <div className="things-I-love">
      <h1 className="font-main color1">Things I Love: </h1>
      <div>
        {props.url.map(link => (
          <img src={link} key={link} alt="things that I love" />
        ))
        }
      </div>
    </div>
  );
};

export default ThingsILove;
