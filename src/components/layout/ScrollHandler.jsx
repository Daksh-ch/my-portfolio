import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollHandler = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // If there is no hash, just scroll to the top of the new page
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [pathname, hash]); 

  return null; 
}

export default ScrollHandler;