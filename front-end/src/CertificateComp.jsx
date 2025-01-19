import React from "react";

const Certificates = ({ img, title, content }) => {
  return (
    <div className="certificate">
      <img src={img} alt="" />
      <div className="inner">
        <div className="content">
          <h4>{title}</h4>
          <p>{content}</p>
          <button className="btn"> know more</button>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
