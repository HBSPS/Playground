import styled from 'styled-components';
import P, { TextSize } from '../Components/_Atoms/P';
import ScrollDownIcon from '../Components/_Atoms/ScrollDownIcon';
import StyledLink from '../Components/_Atoms/StyledLink';
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
          <P size={TextSize.big}>Snow</P>
          <StyledLink to='/snow' color='black'>Try</StyledLink>
        </BackGround>
      </HomeWrapper>
    </>
  );
}

export default Home;
