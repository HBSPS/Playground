import styled from 'styled-components';
import { BackGround } from '../_Atoms/BackGround';
import ScrollDownIcon from '../_Atoms/ScrollDownIcon';
import HomePlaygroundText from '../_Modules/HomePlaygroundText';
import HomeText from '../_Modules/HomeText';

const HomeWrapper = styled.div`
  overflow-x: hidden;
  scroll-snap-type: y mandatory;
  height: 100vh;
  overflow-y: scroll;
`;

const Home = () => {
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
