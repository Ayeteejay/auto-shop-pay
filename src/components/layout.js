import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled, { ThemeProvider } from "styled-components";
import { Container } from "react-bootstrap";
import "../css/index.css";
import Footer from "../components/footer.js";

const theme = {
  colors: {
    aspLightYellow: "#fff6eb",
    aspDarkYellow: "#BF9A5A",
    aspBlue: "#102e57",
    aspLightBlue: "#efefef",
  },
  fontSize: {
    extraSmall: "0.8rem",
    small: "1rem",
    smallMedium: "1.5rem",
    medium: "2rem",
    mediumLarge: "3rem",
    large: "4rem",
    extraLarge: "5rem",
  },
  breakPoints: {
    small: "576px",
    medium: "768px",
    large: "992px",
    extraLarge: "1200px",
  },
};

const MainContainer = styled(Container)`
  h1 {
    font-size: ${(props) => props.theme.fontSize.large};
    font-weight: 900;
    color: ${(props) => props.theme.colors.aspBlue};
  }
  h2 {
    font-size: ${(props) => props.theme.fontSize.mediumLarge};
    font-weight: 900;
    color: ${(props) => props.theme.colors.aspBlue};
  }
  h4 {
    font-size: ${(props) => props.theme.fontSize.medium};
    font-weight: 700;
    color: ${(props) => props.color || props.theme.colors.aspBlue};
  }
  h5 {
    text-transform: uppercase;
    font-size: ${(props) => props.theme.fontSize.extraSmall};
    font-weight: 700;
    letter-spacing: 0.5px;
    color: ${(props) => props.theme.colors.aspDarkYellow};
  }
`;

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <MainContainer fluid>{children}</MainContainer>
      <Footer></Footer>
    </ThemeProvider>
  );
};
export default Layout;
