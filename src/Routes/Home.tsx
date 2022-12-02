import styled from 'styled-components';
import ScrollDownIcon from '../Components/_Atoms/ScrollDownIcon';
import HomePlaygroundText from '../Components/_Molecules/HomePlaygroundText';
import HomeText from '../Components/_Molecules/HomeText';

const BackGround = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #dfe6e9;
  overflow: hidden;
  display: flex;
  align-items: center;
  scroll-snap-align: start;
  position: relative;
`;

const HomeWrapper = styled.div`
  overflow-x: hidden;
  scroll-snap-type: y mandatory;
  height: 100vh;
  overflow-y: scroll;
`;

function Home() {
  return (
    <>
      <HomeWrapper>
        <BackGround>
          <HomeText />
          <ScrollDownIcon />
        </BackGround>
        <BackGround style={{ background: 'black' }}>
          <HomePlaygroundText title='Snow' to='/snow' buttonColor='black' />
        </BackGround>
      </HomeWrapper>
    </>
  );
}

export default Home;
