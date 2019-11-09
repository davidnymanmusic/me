import React, { useLayoutEffect, useState, useEffect } from 'react';
import Resume from './pages/Resume';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { SideBar, MyProvider, Button } from './components/Sidebar';
import Header from './components/Header';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Statement from './pages/Statement';

function App() {
  const pathname = window.location.pathname;

  const [title, setTitle] = useState('');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const displayTitle = title => {
    setTitle(title);
  };
  const getProgress = progress => {
    setProgress(progress);
  };

  return (
    <Router>
      {/* <MyProvider> */}
      <div
        // className="resume"
        style={{
          marginTop: 50,
          display: 'flex',
          justifyContent: 'center',
        }}
        id="page-wrap"
      >
        <Header
          showProgress={pathname === '/resume/'}
          getProgress={getProgress}
          subtitle={title}
        ></Header>
        <SideBar
          title={displayTitle}
          pathName={pathname}
          pageWrapId={'page-wrap'}
        ></SideBar>
        <Switch>
          <Route path="/me" exact>
            <Statement></Statement>
          </Route>

          <Route path="/resume">
            <Resume progress={progress} />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
      {/* </MyProvider> */}
    </Router>
  );
}

export default App;
