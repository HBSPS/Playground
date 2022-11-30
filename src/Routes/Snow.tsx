import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import P, { TextSize } from '../Components/_Atoms/P';
import Button from '../Components/_Atoms/Button';
import HomeLink from '../Components/_Atoms/HomeLink';

const BackGround = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(#123, #111);
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  position: relative;
`;

const SnowFall = keyframes`
  0% {
    transform: translate3d(var(--start), 0, 0);
  }
  100% {
    transform: translate3d(var(--end), 105vh, 0);
  }
`;

const SnowFlake = styled.div`
  --size: 1vw;
  width: var(--size);
  height: var(--size);
  background-color: white;
  border-radius: 50%;
  position: absolute;
  top: -5vh;

  :nth-child(1) {
    --size: 1vw;
    --start: -8vw;
    --end: 3vw;
    left: 21vw;
    animation: ${SnowFall} 12s linear infinite;
    animation-delay: -10s;
  }
  :nth-child(2) {
    --size: 0.6vw;
    --start: 2vw;
    --end: 10vw;
    left: 17vw;
    animation: ${SnowFall} 9s linear infinite;
    animation-delay: -9s;
  }
  :nth-child(3) {
    --size: 0.8vw;
    --start: -5vw;
    --end: -7vw;
    left: 78vw;
    animation: ${SnowFall} 12s linear infinite;
    animation-delay: -1s;
  }
  :nth-child(4) {
    --size: 0.2vw;
    --start: -1vw;
    --end: -9vw;
    left: 57vw;
    animation: ${SnowFall} 6s linear infinite;
    animation-delay: -9s;
  }
  :nth-child(5) {
    --size: 0.2vw;
    --start: 9vw;
    --end: -1vw;
    left: 39vw;
    animation: ${SnowFall} 10s linear infinite;
    animation-delay: -3s;
  }
  :nth-child(6) {
    --size: 0.8vw;
    --start: 3vw;
    --end: -6vw;
    left: 60vw;
    animation: ${SnowFall} 10s linear infinite;
    animation-delay: -1s;
  }
  :nth-child(7) {
    --size: 1vw;
    --start: -1vw;
    --end: -4vw;
    left: 89vw;
    animation: ${SnowFall} 6s linear infinite;
    animation-delay: -8s;
  }
  :nth-child(8) {
    --size: 1vw;
    --start: -4vw;
    --end: -7vw;
    left: 33vw;
    animation: ${SnowFall} 11s linear infinite;
    animation-delay: -2s;
  }
  :nth-child(9) {
    --size: 1vw;
    --start: -4vw;
    --end: -4vw;
    left: 78vw;
    animation: ${SnowFall} 10s linear infinite;
    animation-delay: -5s;
  }
  :nth-child(10) {
    --size: 0.6vw;
    --start: -3vw;
    --end: 1vw;
    left: 73vw;
    animation: ${SnowFall} 15s linear infinite;
    animation-delay: -7s;
  }
  :nth-child(11) {
    --size: 0.4vw;
    --start: 6vw;
    --end: -1vw;
    left: 62vw;
    animation: ${SnowFall} 8s linear infinite;
    animation-delay: -8s;
  }
  :nth-child(12) {
    --size: 0.4vw;
    --start: -1vw;
    --end: 1vw;
    left: 46vw;
    animation: ${SnowFall} 14s linear infinite;
    animation-delay: -10s;
  }
  :nth-child(13) {
    --size: 0.8vw;
    --start: 5vw;
    --end: 0vw;
    left: 28vw;
    animation: ${SnowFall} 9s linear infinite;
    animation-delay: -5s;
  }
  :nth-child(14) {
    --size: 0.8vw;
    --start: 0vw;
    --end: -8vw;
    left: 96vw;
    animation: ${SnowFall} 9s linear infinite;
    animation-delay: -5s;
  }
  :nth-child(15) {
    --size: 1vw;
    --start: 9vw;
    --end: 4vw;
    left: 48vw;
    animation: ${SnowFall} 8s linear infinite;
    animation-delay: -5s;
  }
  :nth-child(16) {
    --size: 0.6vw;
    --start: -2vw;
    --end: 6vw;
    left: 42vw;
    animation: ${SnowFall} 11s linear infinite;
    animation-delay: -3s;
  }
  :nth-child(17) {
    --size: 0.8vw;
    --start: -5vw;
    --end: -5vw;
    left: 11vw;
    animation: ${SnowFall} 15s linear infinite;
    animation-delay: -4s;
  }
  :nth-child(18) {
    --size: 1vw;
    --start: -5vw;
    --end: 2vw;
    left: 21vw;
    animation: ${SnowFall} 6s linear infinite;
    animation-delay: -5s;
  }
  :nth-child(19) {
    --size: 0.6vw;
    --start: -6vw;
    --end: 0vw;
    left: 66vw;
    animation: ${SnowFall} 14s linear infinite;
    animation-delay: -5s;
  }
  :nth-child(20) {
    --size: 0.8vw;
    --start: 7vw;
    --end: -5vw;
    left: 20vw;
    animation: ${SnowFall} 9s linear infinite;
    animation-delay: -4s;
  }
  :nth-child(21) {
    --size: 1vw;
    --start: 5vw;
    --end: -9vw;
    left: 50vw;
    animation: ${SnowFall} 13s linear infinite;
    animation-delay: -2s;
  }
  :nth-child(22) {
    --size: 0.8vw;
    --start: 3vw;
    --end: 5vw;
    left: 16vw;
    animation: ${SnowFall} 12s linear infinite;
    animation-delay: -8s;
  }
  :nth-child(23) {
    --size: 0.2vw;
    --start: -1vw;
    --end: 5vw;
    left: 89vw;
    animation: ${SnowFall} 15s linear infinite;
    animation-delay: -2s;
  }
  :nth-child(24) {
    --size: 0.2vw;
    --start: -8vw;
    --end: -9vw;
    left: 36vw;
    animation: ${SnowFall} 13s linear infinite;
    animation-delay: -9s;
  }
  :nth-child(25) {
    --size: 0.2vw;
    --start: -6vw;
    --end: 0vw;
    left: 100vw;
    animation: ${SnowFall} 8s linear infinite;
    animation-delay: -3s;
  }
  :nth-child(26) {
    --size: 1vw;
    --start: -4vw;
    --end: 3vw;
    left: 72vw;
    animation: ${SnowFall} 9s linear infinite;
    animation-delay: -3s;
  }
  :nth-child(27) {
    --size: 0.8vw;
    --start: -1vw;
    --end: 0vw;
    left: 23vw;
    animation: ${SnowFall} 14s linear infinite;
    animation-delay: -1s;
  }
  :nth-child(28) {
    --size: 0.2vw;
    --start: 8vw;
    --end: -5vw;
    left: 37vw;
    animation: ${SnowFall} 13s linear infinite;
    animation-delay: -5s;
  }
  :nth-child(29) {
    --size: 1vw;
    --start: 9vw;
    --end: 8vw;
    left: 61vw;
    animation: ${SnowFall} 12s linear infinite;
    animation-delay: -1s;
  }
  :nth-child(30) {
    --size: 1vw;
    --start: -4vw;
    --end: -1vw;
    left: 59vw;
    animation: ${SnowFall} 11s linear infinite;
    animation-delay: -10s;
  }
  :nth-child(31) {
    --size: 1vw;
    --start: 2vw;
    --end: -3vw;
    left: 54vw;
    animation: ${SnowFall} 15s linear infinite;
    animation-delay: -7s;
  }
  :nth-child(32) {
    --size: 1vw;
    --start: -4vw;
    --end: -2vw;
    left: 82vw;
    animation: ${SnowFall} 6s linear infinite;
    animation-delay: -6s;
  }
  :nth-child(33) {
    --size: 0.8vw;
    --start: 8vw;
    --end: 4vw;
    left: 16vw;
    animation: ${SnowFall} 7s linear infinite;
    animation-delay: -2s;
  }
  :nth-child(34) {
    --size: 0.8vw;
    --start: -8vw;
    --end: -4vw;
    left: 39vw;
    animation: ${SnowFall} 15s linear infinite;
    animation-delay: -10s;
  }
  :nth-child(35) {
    --size: 1vw;
    --start: -9vw;
    --end: 6vw;
    left: 40vw;
    animation: ${SnowFall} 13s linear infinite;
    animation-delay: -1s;
  }
  :nth-child(36) {
    --size: 0.4vw;
    --start: -6vw;
    --end: -6vw;
    left: 36vw;
    animation: ${SnowFall} 15s linear infinite;
    animation-delay: -7s;
  }
  :nth-child(37) {
    --size: 0.4vw;
    --start: -5vw;
    --end: -6vw;
    left: 90vw;
    animation: ${SnowFall} 7s linear infinite;
    animation-delay: -9s;
  }
  :nth-child(38) {
    --size: 1vw;
    --start: -8vw;
    --end: -8vw;
    left: 9vw;
    animation: ${SnowFall} 7s linear infinite;
    animation-delay: -6s;
  }
  :nth-child(39) {
    --size: 0.6vw;
    --start: 5vw;
    --end: 3vw;
    left: 83vw;
    animation: ${SnowFall} 7s linear infinite;
    animation-delay: -3s;
  }
  :nth-child(40) {
    --size: 0.6vw;
    --start: -2vw;
    --end: 1vw;
    left: 84vw;
    animation: ${SnowFall} 9s linear infinite;
    animation-delay: -3s;
  }
  :nth-child(41) {
    --size: 0.6vw;
    --start: -1vw;
    --end: -8vw;
    left: 73vw;
    animation: ${SnowFall} 13s linear infinite;
    animation-delay: -9s;
  }
  :nth-child(42) {
    --size: 0.2vw;
    --start: -4vw;
    --end: 3vw;
    left: 19vw;
    animation: ${SnowFall} 13s linear infinite;
    animation-delay: -10s;
  }
  :nth-child(43) {
    --size: 0.4vw;
    --start: -2vw;
    --end: 4vw;
    left: 80vw;
    animation: ${SnowFall} 13s linear infinite;
    animation-delay: -3s;
  }
  :nth-child(44) {
    --size: 0.8vw;
    --start: 6vw;
    --end: -3vw;
    left: 7vw;
    animation: ${SnowFall} 8s linear infinite;
    animation-delay: -9s;
  }
  :nth-child(45) {
    --size: 0.6vw;
    --start: -5vw;
    --end: -7vw;
    left: 60vw;
    animation: ${SnowFall} 8s linear infinite;
    animation-delay: -7s;
  }
  :nth-child(46) {
    --size: 0.2vw;
    --start: -4vw;
    --end: -9vw;
    left: 82vw;
    animation: ${SnowFall} 12s linear infinite;
    animation-delay: -7s;
  }
  :nth-child(47) {
    --size: 0.2vw;
    --start: -4vw;
    --end: -2vw;
    left: 56vw;
    animation: ${SnowFall} 15s linear infinite;
    animation-delay: -8s;
  }
  :nth-child(48) {
    --size: 0.6vw;
    --start: 8vw;
    --end: -8vw;
    left: 11vw;
    animation: ${SnowFall} 15s linear infinite;
    animation-delay: -10s;
  }
  :nth-child(49) {
    --size: 1vw;
    --start: 3vw;
    --end: 8vw;
    left: 24vw;
    animation: ${SnowFall} 12s linear infinite;
    animation-delay: -9s;
  }
  :nth-child(50) {
    --size: 1vw;
    --start: 7vw;
    --end: -8vw;
    left: 69vw;
    animation: ${SnowFall} 12s linear infinite;
    animation-delay: -3s;
  }
  :nth-child(6n) {
    filter: blur(1px);
  }
`;

const Wrapper = styled.div``;

function Snow() {
  const [snowFlakeCount, setSnowFlakeCount] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const SnowFlakeCount = new Array(snowFlakeCount).fill(0);

  const addSnowFlake = () => {
    setSnowFlakeCount((prev) => prev + 1);
  };

  const clearSnowFlakes = () => {
    setSnowFlakeCount(0);
  };

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <BackGround>
        <HomeLink />
        <Wrapper>
          <P size={TextSize.big} text='Welcome!' />
          <P text='You can add snowflakes here.' />
          <P text='Try adding as many snowflakes as you like and get some rest.' />
          <Button onClick={addSnowFlake} text='Add Snowflake' />
          <Button onClick={clearSnowFlakes} text='Clear Snowflakes' />
          {screenWidth > 1100 ? (
            <P
              size={TextSize.small}
              text='&#40; If you press the &lt; f 1 1 &gt; key, you will have a better experience &#41;'
            />
          ) : null}
        </Wrapper>
        {SnowFlakeCount.map((value, index) => (
          <SnowFlake key={index} />
        ))}
      </BackGround>
    </>
  );
}

export default Snow;
