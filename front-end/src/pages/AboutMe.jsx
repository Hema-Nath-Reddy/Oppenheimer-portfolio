import React, { useEffect, useState } from "react";

import ParticleAnimation from "../ParticleAnimation";

const AboutMe = () => {
  let skills = [
    "I am a Full Stack Web Developer",
    "I am an Android App Developer",
    "I am a Data Structures programmer",
    "I am a C/C++/C# programmer",
    "I am a Java Developer",
    "I am a Python Developer",
    "I am a Hybrid App Developer",
  ];
  const [currentSkill, setCurrentSkill] = useState(skills[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomSkill = skills[Math.floor(Math.random() * skills.length)];
      setCurrentSkill(randomSkill);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [skills]);

  return (
    <div className="containers about">
      <p>
        I am a student of Christ[Deemed to be] University, Yeshwanthpur campus
        doing a undergraduate degree in computer applications. I am very
        passionate about anything related to computer science and I am
        constantly learning something new which is related to computer science
      </p>
      <p>And</p>
      <p>{currentSkill}</p>
    </div>
  );
};

export default AboutMe;
