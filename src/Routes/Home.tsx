import styled from 'styled-components';
import { BackGround } from '../Components/_Atoms/BackGround';
import ScrollDownIcon from '../Components/_Atoms/ScrollDownIcon';
import HomePlaygroundText from '../Components/_Molecules/HomePlaygroundText';
import HomeText from '../Components/_Molecules/HomeText';

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
        <BackGround.Black>
          <HomePlaygroundText title='Snow' buttonColor='black' to='/snow' />
        </BackGround.Black>
      </HomeWrapper>
    </>
  );
}

export default Home;
