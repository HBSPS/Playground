import { useEffect, useState } from 'react';
import P, { TextSize } from '../_Atoms/P';

const InfoText = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, []);

  return screenWidth > 1100 ? (
    <P size={TextSize.small}>{'( If you press the f 1 1 key, you will have a better experience )'}</P>
  ) : null;
};

export default InfoText;
