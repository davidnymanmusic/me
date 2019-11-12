import React, { useState, useEffect } from "react";
import IsScrolling from "react-is-scrolling";
import Fade from "react-reveal/Fade";
import Reveal from "react-reveal/Reveal";

import { useScroll } from "../hooks/useScroll";
import { peach, isMobile } from "../constants";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { GoMarkGithub } from "react-icons/go";
import { FaTwitter, FaLinkedin } from "react-icons/fa";

const FadeStop = props =>
  props.stop ? <Fade {...props}>{props.children}</Fade> : <>{props.children}</>;

function Resume(props) {
  const [stop, setStop] = useState(true);
  const { scrollY } = useScroll();
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
  const target = React.createRef();

  const showAll = () => {
    setStop(false);
  };

  const duration = props.isScrollingUp ? 2121 : 3333;

  useEffect(() => {
    if (isMobile() || width <= 1000) {
      setStop(false);
    }
  }, []);

  return (
    <div
      className={isMobile() || width <= 1000 ? "resume-mobile" : "resume"}
      ref={target}
    >
      {stop ? (
        <Fade forever={true} duration={2000}>
          <h2 style={{ marginBottom: "5em", textAlign: "center" }}>
            Start Scrolling
          </h2>
        </Fade>
      ) : null}
      <div>
        <div style={{ color: peach }}>
          <FadeStop stop={stop} when={scrollY > 50} duration={800}>
            <h1>Training and Experience</h1>
            <h2>Full Stack, Agile, and Client Driven Problem Solving</h2>

            <p>
              With training in IBM’s Garage Method and my prior experience
              collaborating with clients in a creative field I am ready to help
              solve problems with code and empathy in cloud native environments.
            </p>
            <p>
              My background in music provided me a foundation of working with
              abstract languages and my work with clients prepared me for the
              creative feedback cycle.
            </p>
          </FadeStop>
        </div>
        <Reveal when={scrollY > 60}>
          <hr></hr>
        </Reveal>
        <div
          style={{
            color: peach
          }}
        >
          <FadeStop
            style={{
              color: peach
            }}
            stop={stop}
            when={scrollY > 200}
            duration={duration}
          >
            <h1>Work work work work, work</h1>
            <h2>IBM Garage for Cloud, New York City 2018–2019</h2>
            <i>Projects</i>
            <p>
              <b>Garage Talent Tool </b> <br></br>The GTT is an internal
              application to facilitate talent deployment onto consulting
              engagements, including a skills tracker for talent (developers,
              architects, and designers) to be used world-wide by all developers
              in the 14+ locations around the world.
            </p>
            {[
              "Node.js",
              "React",
              "PostgreSQL",
              "Docker",
              "Kubernetes",
              "CI/CD",
              "Agile",
              "Kanban"
            ].map(tag => (
              <div className="tag" key="tag">
                {tag}
              </div>
            ))}
            <p>
              <b>SubK Request Form</b> <br></br>
              Internal application using IBM SSAe to help process subK requests
              for external engagements.
            </p>
            <br></br>
            <hr></hr>
            <h2>Skinno, New York City - 2018</h2>
            <i>iOS Developer Intern</i> <br></br>
            <p>
              Developing UI/UX components and OCR scanner with Google Vision for
              skincare data company. Implemented a web quiz for determining a
              user’s skin type.
            </p>
            {["iOS", "React Native", "React", "Node.js"].map(tag => (
              <div className="tag">{tag}</div>
            ))}
            <br></br>
            <hr></hr>
            <h2>Composer at David Nyman Music, New York City 2010-2019</h2>
            <i>Freelancer</i> <br></br>
            <p>
              Provided original music for a variety of clients ranging from
              independent filmmakers to billion dollar companies. All music work
              was self recorded and produced in Logic Pro X
            </p>
            <h2>Clients</h2>
            {[
              "Netflix",
              "Microsoft",
              "NPR",
              "Buzzfeed",
              "Norton Antivirus",
              "Bacardi",
              "Airbnb",
              "Philips",
              "Delta Airlines",
              "Chase Bank",
              "Selfridges",
              "Bain Capital"
            ].map(tag => (
              <div className="tag-client" key={tag}>
                {tag}
              </div>
            ))}
          </FadeStop>
        </div>
        <Reveal when={scrollY > 250}>
          <hr></hr>
        </Reveal>
        <div style={{ color: peach }}>
          <FadeStop stop={stop} when={scrollY > 350} duration={duration}>
            <h1>Education</h1>
            <h2>Hampshire College, B.A. 2006-2010</h2>
            <i>Music Composition for Film</i>
            <p>
              Studied the transformative power of music in relation to the
              pyschological state watching films
            </p>
          </FadeStop>
          <hr></hr>
          <div style={{ color: peach }}>
            <FadeStop stop={stop} when={scrollY > 350} duration={duration}>
              <h1>Early Life</h1>
              <h3>Wayland Academy, Beaver Dam, WI 2004-2006</h3>
              <i>Boarding high school</i>
              <h3>Kingsford Schools, Kingsford MI 1994-2004</h3>
              <i>Hometown</i>
              <h3>Sun Valley, ID</h3>
              <i>Birthplace</i>
            </FadeStop>
          </div>
          <Reveal when={scrollY > 4000}>
            <hr></hr>
          </Reveal>
          <FadeStop
            stop={stop}
            when={scrollY > 700}
            duration={duration}
            onReveal={() =>
              setTimeout(() => {
                showAll();
              }, 2000)
            }
          >
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
          </FadeStop>
        </div>
      </div>
    </div>
  );
}

export default IsScrolling(Resume);
