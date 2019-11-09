import React from 'react';

const ReadingProgress = props => {
  const [readingProgress, setReadingProgress] = React.useState(0);
  const scrollListener = () => {
    if (!props.target.current) {
      return;
    }

    const element = props.target.current;
    const totalHeight =
      element.clientHeight - element.offsetTop - window.innerHeight;
    const windowScrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    if (windowScrollTop === 0) {
      return setReadingProgress(0);
    }

    if (windowScrollTop > totalHeight) {
      return setReadingProgress(100);
    }

    setReadingProgress((windowScrollTop / totalHeight) * 100);
  };

  React.useEffect(() => {
    props.sendProgress(readingProgress);
    window.addEventListener('scroll', scrollListener);
    return () => window.removeEventListener('scroll', scrollListener);
  });

  return (
    <div
      className={`reading-progress-bar`}
      style={{ width: `${readingProgress}%` }}
    >
      <div
        style={{ paddingLeft: readingProgress }}
        className={!readingProgress === 0 ? 'progress-left' : 'progress-right'}
      >
        {props.children}
      </div>
    </div>
  );
};
export default ReadingProgress;
