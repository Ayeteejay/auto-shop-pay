import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import "../css/index.css";

const MainContainer = styled(Container)`
  h1 {
    font-size: 5rem;
    font-weight: 900;
  }
`;

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <MainContainer fluid>{children}</MainContainer>
    </React.Fragment>
  );
};
export default Layout;
