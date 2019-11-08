import React, { useLayoutEffect, useState, useEffect } from 'react';
import Resume from './pages/Resume';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import SideBar from './components/Sidebar';
import Header from './components/Header';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Statement from './pages/Statement';

function App() {
  const pathname = window.location.pathname;

  const [title, setTitle] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const displayTitle = title => {
    setTitle(title);
  };

  return (
    <Router>
      <div
        // className="resume"
        style={{
          marginTop: 50,
          border: '1px solid red',
        }}
        id="page-wrap"
      >
        <Header subtitle={title}></Header>

        <SideBar
          title={displayTitle}
          pathName={pathname}
          pageWrapId={'page-wrap'}
        ></SideBar>
        <Switch>
          <Route path="/" exact>
            <Statement></Statement>
          </Route>

          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
