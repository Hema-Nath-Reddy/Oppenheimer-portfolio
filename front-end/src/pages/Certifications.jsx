    import React from "react";
    import Certificates from "../Certificates";
    import cet from "../assets/cet.png";
    const Certifications = () => {
    const title = "Full Stack Web Development";
    const description =
        "Full Stack Web Development is a comprehensive course that covers the entire web development process";
    return (
        <div className="containers cert">
        <Certificates img={cet} title={title} content={description} />
        </div>
    );
    };

    export default Certifications;
