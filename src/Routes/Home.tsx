import styled from 'styled-components';
import { Link } from 'react-router-dom';
import scroll_down from '../Assets/Images/scroll_down.png'

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

const Wrapper = styled.div`
  overflow-x: hidden;
  scroll-snap-type: y mandatory;
  height: 100vh;
  overflow-y: scroll;
`;

const Text = styled.p`
  font-family: 'GruppoRegular';
  color: #0984e3;
  font-size: 5vh;
  margin-left: 3vw;
  margin-bottom: 5vh;
  margin-top: 5vh;
`;

const StyledLink = styled(Link)`
  font-family: 'GruppoRegular';
  padding: 1vh 3vh;
  margin-left: 3vw;
  border-radius: 1vh;
  text-decoration: none;
  font-size: 2vh;
  color: black;
  font-weight: bold;
  background-color: white;
`;

const ScrollDownIcon = styled.div`
  width: 10vh;
  height: 10vh;
  background-image: url(${scroll_down});
  background-size: cover;
  position: absolute;
  left: 45vw;
  bottom: 10vh;
`;

function Home() {
  return (
    <>
      <Wrapper>
        <BackGround>
          <div>
            <Text>Welcome!</Text>
            <Text>Here is my playground!</Text>
            <Text>This place is made up of my favorite things.</Text>
          </div>
          <ScrollDownIcon />
        </BackGround>
        <BackGround style={{ background: 'black' }}>
          <Text style={{ color: 'white' }}>Snow</Text>
          <StyledLink to={'/snow'}>Try</StyledLink>
        </BackGround>
      </Wrapper>
    </>
  );
}

export default Home;
