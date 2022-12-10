import styled from 'styled-components';

const Sky = styled.div`
  background: linear-gradient(to bottom, #94c5f8 1%,#a6e6ff 70%,#b1b5ea 100%);
  width: 100vw;
  height: 40vh;
  position: absolute;
  top: 0;
`;

const BeachSky = () => {
  return <Sky />;
};

export default BeachSky;
