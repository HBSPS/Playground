import { useState } from 'react';

const useSnowFlake = () => {
  const [snowFlakeCount, setSnowFlakeCount] = useState(0);
  const SnowFlakeCount = new Array(snowFlakeCount).fill(0);

  const addSnowFlake = () => {
    setSnowFlakeCount((prev) => prev + 1);
  };

  const clearSnowFlakes = () => {
    setSnowFlakeCount(0);
  };

  return { SnowFlakeCount, addSnowFlake, clearSnowFlakes };
};

export default useSnowFlake;
