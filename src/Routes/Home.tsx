import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BackGround = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #dfe6e9;
  overflow: hidden;
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  overflow-x: hidden;
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
