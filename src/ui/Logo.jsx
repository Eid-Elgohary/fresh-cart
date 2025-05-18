import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from '../../public/freshcart-logo.svg'

const LogoDiv = styled.div`
  width: 41.5%;
  flex: 0 0 auto;
  align-self:self-start;
  @media (min-width:768px){
    width: 50%
  }
  @media (min-width:992px){
    width: 25%
  }
  @media (min-width:1400px){
    width: 16.66%
  }
  
`;
function Logo() {
  return (
    <LogoDiv>
      <Link to='/home'>
      <img src={logo} alt="fresh cart logo" />
      </Link>
    </LogoDiv>
  );
}

export default Logo;
