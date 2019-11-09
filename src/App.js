import React, { useLayoutEffect, useState, useEffect } from 'react';
import Resume from './pages/Resume';
import {
  BrowserRouter as HashRouter,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
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
    <HashRouter basename="/">
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
        />
        <SideBar
          title={displayTitle}
          pathName={pathname}
          pageWrapId={'page-wrap'}
        />
        <Switch>
          <Route path="/" exact component={Statement} />>
          <Route
            path="/resume"
            component={() => <Resume progress={progress} />}
          />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;