import React from "react";
import { light, isMobile } from "../constants";
import { FiMail } from "react-icons/fi";
import { GoMail } from "react-icons/go";
import { GoMarkGithub } from "react-icons/go";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import useWindowDimensions from "../hooks/useWindowDimensions";
import david from "../assets/david.jpg";
import { blue } from "ansi-colors";

function Contact() {
  const { width } = useWindowDimensions();
  const size =
    isMobile() || width < 800
      ? { height: 30, width: 30, padding: "0 2px" }
      : { height: 70, width: 70, padding: "0 20px" };
  const icons = [
    {
      icon: <GoMarkGithub className="icon" style={size} />,
      text: "GitHub",
      link: "https://github.com/davidnymanmusic"
    },
    {
      icon: <FaTwitter className="icon" style={size} />,
      text: "Twitter",
      link: "https://twitter.com/davidnyman"
    },
    {
      icon: <FaLinkedin className="icon" style={size} />,
      text: "LinkedIn",
      link: "https://www.linkedin.com/in/david-nyman-music/"
    }
  ];

  const image = {
    image: david
  };
  return (
    <div className="content ">
      <div className="contact">
        <a
          className="contact"
          style={{ color: light, fontSize: 50 }}
          href="mailto:davenyman@gmail.com?subject=Hello world&body=Hey David,%0D(Got this email started for you)"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GoMail className="icon" style={{ fontSize: 80 }}></GoMail>
          <p>Email me</p>
        </a>
      </div>
      <img className="me" src={david}></img>
      <div className="center icon-group">
        {icons.map((i, index) => (
          <div
            key={index}
            className="icon"
            onClick={() => window.open(i.link, "_blank")}
          >
            {i.icon}
            {<p>{i.text}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;
