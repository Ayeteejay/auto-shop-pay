import React from "react";
import styled from "styled-components";
import Logo from "../images/autoshop-pay-blue-logo.svg";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "gatsby";

const MainNav = styled(Navbar)`
  background-color: white;
  padding: 1.5rem 3rem;
  a {
    color: ${(props) => props.theme.colors.aspBlue};
    transition: 0.3s;
  }
  a:hover {
    color: ${(props) => props.theme.colors.aspDarkYellow};
    text-decoration: none;
  }
`;

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
`;

const Header = () => {
  return (
    <MainNav sticky="top" collapseOnSelect expand="lg">
      <Link to="/">
        <img src={Logo} width="220px" alt="Auto Shop Pay Logo"></img>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          <CallToAction to="/contact">Book Appointment &#8594;</CallToAction>
        </Navbar.Text>
      </Navbar.Collapse>
    </MainNav>
  );
};
export default Header;
