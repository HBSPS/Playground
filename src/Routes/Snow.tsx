import styled, { keyframes } from 'styled-components';

const BackGround = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(#123, #111);
  overflow: hidden;
  position: relative;
`;

const SnowFall = keyframes`
  0% {
    transform: translate3d(var(--start), 0, 0);
  }
  100% {
    transform: translate3d(var(--end), 110vh, 0);
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
`;

function Snow() {
  return (
    <>
      <BackGround>
        <SnowFlake />
      </BackGround>
    </>
  );
}

export default Snow;
