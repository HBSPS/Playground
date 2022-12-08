import styled, { keyframes } from 'styled-components';
import Wrapper from '../_Atoms/Wrapper';

const Ocean = styled.div`
  width: 100vw;
  height: 10vh;
  background: linear-gradient(#4ea292, #7ab3a7);
`;

const WaveMovement = keyframes`
  0% {
   transform: translate3d(-90px,0,0);
  }
  100% { 
    transform: translate3d(85px,0,0);
  }
`;

const SVG = styled.svg`
  position: relative;
  width: 100vw;
  height: 15vh;
  margin-bottom: -7px; /*Fix for safari gap*/
  min-height: 100px;
  max-height: 150px;
  transform: scaleY(-1);
`;

const G = styled.g`
  use {
    animation: ${WaveMovement} 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;

    &:nth-child(1) {
      fill: #e2cda7;
    }
    &:nth-child(2) {
      fill: #e5e8e1;
      animation-delay: -3s;
    }
    &:nth-child(3) {
      fill: #7ab3a7;
      animation-delay: -2s;
    }
  }
`;

const Wave = () => {
  return (
    <>
      <Wrapper>
        <Ocean />
        <SVG
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
          viewBox='0 24 150 28'
          preserveAspectRatio='none'
          shape-rendering='auto'>
          <defs>
            <path id='gentle-wave' d='M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z' />
          </defs>
          <G className='parallax'>
            <use xlinkHref='#gentle-wave' x='50' y='0' />
            <use xlinkHref='#gentle-wave' x='50' y='0' />
            <use xlinkHref='#gentle-wave' x='50' y='3' />
          </G>
        </SVG>
      </Wrapper>
    </>
  );
};

export default Wave;
