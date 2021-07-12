// Source: https://usehooks.com/useWindowSize/

import React from 'react';

function useWindowWidth() {
  const [windowWidth, setWindowWidth] = React.useState<number>();

  React.useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowWidth;
}

export { useWindowWidth };
