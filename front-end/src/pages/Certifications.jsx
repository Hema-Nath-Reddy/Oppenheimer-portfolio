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
          MORE
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="arrow-narrow-left"
          >
            <path d="M17.8536 17.3536C17.6583 17.5488 17.3417 17.5488 17.1464 17.3536C16.9512 17.1583 16.9512 16.8417 17.1464 16.6464L21.2928 12.5H1.5C1.22386 12.5 1 12.2761 1 12C1 11.7239 1.22386 11.5 1.5 11.5H21.2928L17.1464 7.35355C16.9512 7.15829 16.9512 6.84171 17.1464 6.64645C17.3417 6.45118 17.6583 6.45119 17.8536 6.64645L22.8535 11.6464C23.0488 11.8417 23.0488 12.1583 22.8535 12.3536L17.8536 17.3536Z"></path>
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
          MORE
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="arrow-narrow-right"
          >
            <path d="M17.8536 17.3536C17.6583 17.5488 17.3417 17.5488 17.1464 17.3536C16.9512 17.1583 16.9512 16.8417 17.1464 16.6464L21.2928 12.5H1.5C1.22386 12.5 1 12.2761 1 12C1 11.7239 1.22386 11.5 1.5 11.5H21.2928L17.1464 7.35355C16.9512 7.15829 16.9512 6.84171 17.1464 6.64645C17.3417 6.45118 17.6583 6.45119 17.8536 6.64645L22.8535 11.6464C23.0488 11.8417 23.0488 12.1583 22.8535 12.3536L17.8536 17.3536Z"></path>
          </svg>
        </button>
      )}
    </div>
  );
};

export default Certifications;
