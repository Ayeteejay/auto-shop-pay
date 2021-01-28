import React from "react";
import styled from "styled-components";
import Logo from "../images/autoshop-pay-blue-logo.svg";
import { Link } from "gatsby";

const CallToAction = styled(Link)`
  background-color: ${(props) => props.theme.colors.aspDarkYellow};
  padding: 1rem 2rem;
  color: white !important;
  transition: 0.3s;
  :hover {
    text-decoration: none;
    background-color: ${(props) => props.theme.colors.aspBlue};
  }
  @media only screen and (max-width: ${(props) =>
      props.theme.breakPoints.large}) {
    padding: 0.5rem 1rem;
  }
  @media (max-width: ${(props) => props.theme.breakPoints.small}) {
    display: none;
  }
`;

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5em 3em;
`;

const Whopper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  cursor: pointer;
  display: none;
  @media (max-width: ${(props) => props.theme.breakPoints.small}) {
    display: inherit;
  }
`;
const BurgerSlices = styled.span`
  display: block;
  width: 28px;
  height: 3px;
  background-color: ${(props) => props.theme.colors.aspDarkYellow};
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

const Header = () => {
  return (
    <Navigation>
      <Link to="/">
        <img src={Logo} width="220px" alt="Auto Shop Pay Logo"></img>
      </Link>
      <Whopper>
        <BurgerSlices></BurgerSlices>
        <BurgerSlices></BurgerSlices>
        <BurgerSlices></BurgerSlices>
      </Whopper>
      <CallToAction to="/contact">Book Appointment &#8594;</CallToAction>
    </Navigation>
  );
};
export default Header;
