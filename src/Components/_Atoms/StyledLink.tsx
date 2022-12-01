import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { PropsWithChildren } from 'react';

const DefaultLink = styled(Link)`
  font-family: 'GruppoRegular';
  padding: 1vh 3vh;
  margin-left: 3vw;
  border-radius: 1vh;
  text-decoration: none;
  font-size: 2vh;
  font-weight: bold;
  background-color: white;

  color: ${(props) => props.color};
`;

interface IProps extends PropsWithChildren {
  to: string;
  color?: string;
}

const StyledLink = (props: IProps) => {
  const { children, to, color } = props;
  const style = {
    color: color,
  };
  return <DefaultLink to={to} style={style}>{children}</DefaultLink>
}

export default StyledLink;
