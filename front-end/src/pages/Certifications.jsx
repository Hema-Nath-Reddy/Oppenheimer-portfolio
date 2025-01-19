import React, { useState } from "react";
import CertificatesComp from "../CertificateComp";

const Certifications = () => {
  const [translate, setTranslate] = useState(20);
  const [certs, setCerts] = useState([
    {
      img: "../src/assets/cet.png",
      title: "Certification 1",
      content: "Description of certification 1",
    },
    {
      img: "../src/assets/cet.png",
      title: "Certification 2",
      content: "Description of certification 2",
    },
    {
      img: "../src/assets/cet.png",
      title: "Certification 3",
      content: "Description of certification 3",
    },
  ]);

  const handleLeftClick = () => {
    setTranslate((prevTranslate) => prevTranslate + 40);
  };

  const handleRightClick = () => {
    setTranslate((prevTranslate) => prevTranslate - 40);
  };

  return (
    <div className="containers cert">
      {translate < 20 && (
        <button className="more left" onClick={handleLeftClick}>
          More
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path d="m700-300-57-56 84-84H120v-80h607l-83-84 57-56 179 180-180 180Z" />
          </svg>
        </button>
      )}

      <div
        className="innerCert"
        style={{ transform: `translateX(${translate}%)` }}
      >
        {certs.map((cert, index) => (
          <CertificatesComp
            key={index}
            img={cert.img}
            title={cert.title}
            content={cert.content}
          />
        ))}
      </div>

      {translate > -certs.length * 40 + 60 && (
        <button className="more right" onClick={handleRightClick}>
          More
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path d="m700-300-57-56 84-84H120v-80h607l-83-84 57-56 179 180-180 180Z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Certifications;
