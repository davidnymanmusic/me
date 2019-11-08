import React, { useState } from 'react';
import IsScrolling from 'react-is-scrolling';
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';
import Zoom from 'react-reveal/Zoom';

import { useScroll } from '../hooks/useScroll';
import { peach } from '../constants';
import useWindowDimensions from '../hooks/useWindowDimensions';
import { GoMarkGithub } from 'react-icons/go';
import { FaTwitter, FaLinkedin } from 'react-icons/fa';
import ReadingProgress from '../components/ReadingProgress';

const FadeStop = props =>
  props.stop ? <Fade {...props}>{props.children}</Fade> : <>{props.children}</>;

function Resume({ isScrolling, isScrollingDown, isScrollingUp }) {
  const size = { height: 100, width: 100 };
  const icons = [
    {
      icon: <GoMarkGithub className="icon" style={size} />,
      text: 'GitHub',
      link: 'https://github.com/davidnymanmusic',
    },
    {
      icon: <FaTwitter className="icon" style={size} />,
      text: 'Twitter',
      link: 'https://twitter.com/davidnyman',
    },
    {
      icon: <FaLinkedin className="icon" style={size} />,
      text: 'LinkedIn',
      link: 'https://www.linkedin.com/in/david-nyman-music/',
    },
  ];
  const target = React.createRef();

  const showAll = () => {
    setStop(false);
  };
  const [stop, setStop] = useState(true);
  const { scrollY } = useScroll();
  const { height, width } = useWindowDimensions();
  const duration = isScrollingUp ? 2121 : 3333;
  return (
    <div className="resume" style={{ height: '2000px' }} ref={target}>
      <div style={{ position: 'sticky', top: 100 }}>
        <h1>Scrolling position - {scrollY}</h1>
        {height !== scrollY ? (
          <ReadingProgress target={target} />
        ) : (
          <div className="reading-progress-bar-static"></div>
        )}
        <div style={{ color: peach }}>
          <FadeStop
            stop={stop}
            when={scrollY > 100 || height < scrollY}
            duration={duration}
          >
            <h1>Deserunt in officia id dolor labore quis ex culpa quis do .</h1>

            <p>
              Eu fugiat id dolor pariatur aliquip amet ut non eu in ea quis
              elit. Irure velit eu esse laborum ipsum irure elit ea consectetur
              velit. Officia minim sit exercitation fugiat velit reprehenderit.
              Commodo sint aliquip esse minim culpa dolore ea. Voluptate
              deserunt incididunt deserunt est do veniam commodo tempor duis.
              Anim proident eiusmod et excepteur cillum commodo magna in
              excepteur deserunt excepteur. Incididunt id non nostrud
              exercitation irure est consectetur culpa. Ea ullamco sint non sint
              tempor proident commodo culpa aliquip fugiat. Proident elit in
              cupidatat ullamco aliquip magna excepteur aute quis. Sunt
              excepteur consequat enim minim commodo labore cupidatat excepteur
              do sint dolore cillum.
            </p>
          </FadeStop>
        </div>
        <Reveal when={scrollY > 150}>
          <hr></hr>
        </Reveal>
        <div style={{ color: peach }}>
          <FadeStop stop={stop} when={scrollY > 200} duration={duration}>
            <h1>
              Laborum mollit duis dolor aliquip ex proident ea id voluptate
              labore.
            </h1>
            <p>
              Anim ex minim duis ea duis duis exercitation pariatur. Incididunt
              elit est est ad esse ex id deserunt cillum minim pariatur
              cupidatat velit ea. Eu officia duis in nostrud commodo. Duis
              aliqua enim anim sit fugiat. Dolor do aute aliqua est ullamco
              ullamco elit commodo mollit enim aliqua. Est adipisicing enim
              irure cupidatat sunt consectetur do laborum dolore tempor. Elit
              velit laboris aliquip laboris tempor fugiat duis incididunt do
              tempor. Fugiat enim commodo laborum sint fugiat est. Consectetur
              proident elit mollit minim occaecat Lorem voluptate pariatur
            </p>
          </FadeStop>
        </div>
        <div style={{ color: peach }}>
          <FadeStop stop={stop} when={scrollY > 330} duration={duration}>
            <h1>Dolore officia mollit aliqua deserunt deserunt commodo.</h1>
            <p>
              In ullamco magna occaecat ex labore ullamco et fugiat adipisicing.
              Eiusmod qui eu ex ipsum sit commodo fugiat. Deserunt dolore enim
              quis fugiat ea qui commodo qui do est laboris cupidatat. Non id
              quis commodo cupidatat. Aliqua in sit sit consequat quis non
              tempor minim elit excepteur tempor cupidatat. Ullamco qui aliquip
              aliqua enim nisi enim ullamco ullamco qui ea laborum eiusmod. Ea
              consectetur ea cupidatat amet. Sunt irure sunt magna veniam culpa
              cupidatat sunt non. Adipisicing aliqua proident nulla aliquip
              ipsum adipisicing ut laborum tempor Lorem. Reprehenderit eu sit
              magna nisi do occaecat elit. Qui adipisicing do pariatur ullamco
              sunt pariatur ipsum velit sit. Reprehenderit culpa velit eiusmod
            </p>
          </FadeStop>
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
            <div className="center">
              {icons.map((i, index) => (
                <div
                  key={index}
                  className="icon"
                  onClick={() => window.open(i.link, '_blank')}
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
