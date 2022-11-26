import styled from 'styled-components';
import SnowFlake from '../Components/Snow/SnowFlakeStyle';

const BackGround = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(#123, #111);
  overflow: hidden;
  position: relative;
`;

function Snow() {
  const SnowFlakeCount = new Array(50).fill(0);
  return (
    <>
      <BackGround>
        {SnowFlakeCount.map(() => <SnowFlake />)}
      </BackGround>
    </>
  );
}

export default Snow;
