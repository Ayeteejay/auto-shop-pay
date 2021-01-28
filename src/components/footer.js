import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import AspLogo from "../images/autoshop-pay-blue-logo.svg";
import Image from "react-bootstrap/Image";
import Fade from "react-reveal";

const FooterContainer = styled(Container)`
  color: ${(props) => props.theme.colors.aspBlue};
  padding: 4rem 0rem;
  width: 75%;
  p {
    font-size: ${(props) => props.theme.fontSize.extraSmall};
  }
  a {
    color: ${(props) => props.theme.colors.aspBlue};
    text-decoration: none;
    transition: 0.3s;
  }
  a:hover {
    color: ${(props) => props.theme.colors.aspDarkYellow};
  }
  ul {
    list-style: none;
  }
  li {
    font-size: ${(props) => props.theme.fontSize.extraSmall};
    line-height: ${(props) => props.theme.fontSize.smallMedium};
  }
  li:first-child {
    font-weight: bold;
  }
  @media only screen and (max-width: ${(props) =>
      props.theme.breakPoints.small}) {
    ul {
      padding: 0;
    }
  }
  span {
    font-weight: bold;
  }
`;

const CompanyLogo = styled(Image)`
  max-width: 180px;
  margin: 0 0 0.5rem 0;
`;

const LinksSection = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 0 4rem 0;
  @media only screen and (max-width: ${(props) =>
      props.theme.breakPoints.small}) {
    flex-flow: column;
  }
`;

const SiteLinksColumn = styled.div`
  padding: 0 1rem;
  @media only screen and (max-width: ${(props) =>
      props.theme.breakPoints.small}) {
    padding: 0;
  }
`;

const SocialLinksColumn = styled.div`
  padding: 0 1rem;
  @media only screen and (max-width: ${(props) =>
      props.theme.breakPoints.small}) {
    padding: 0;
  }
`;

const AddressColumn = styled.div`
  padding: 0;
`;

const CopyrightSection = styled.div`
  border-top: 1px solid ${(props) => props.theme.colors.aspLightGray};
  display: flex;
  padding: 1rem 0 0 0;
  justify-content: space-between;
  @media only screen and (max-width: ${(props) =>
      props.theme.breakPoints.small}) {
    flex-flow: column;
    text-align: center;
    p {
      padding: 0;
      margin: 0.1rem;
    }
  }
`;

const currentYear = () => {
  const date = new Date();
  const year = date.getFullYear();
  return year;
};

const Footer = () => {
  return (
    <Fade>
      <FooterContainer fluid>
        <Row>
          <Col sm={4}>
            <CompanyLogo src={AspLogo} fluid />
          </Col>
          <Col sm={8}>
            <LinksSection>
              <SiteLinksColumn>
                <ul>
                  <li>Product</li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/pricing">Pricing</Link>
                  </li>
                  <li>
                    <Link to="/insights">Insights</Link>
                  </li>
                </ul>
              </SiteLinksColumn>
              <SocialLinksColumn>
                <ul>
                  <li>Social</li>
                  <li>
                    <a
                      href="https://www.facebook.com/autoshoppay"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/autoshoppay"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Twitter
                    </a>
                  </li>
                </ul>
              </SocialLinksColumn>
              <AddressColumn>
                <ul>
                  <li>Contact</li>
                  <li>
                    <p>
                      1420 Kettner Blvd. Suite 324<br></br>
                      San Diego CA 92101<br></br>
                    </p>
                  </li>

                  <li>
                    <a
                      href="mailto:hello@autoshoppay.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      619 990-8133
                    </a>
                    <br></br>
                    <span>
                      <a
                        href="mailto:hello@autoshoppay.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        hello@autoshoppay.com
                      </a>
                    </span>
                  </li>
                </ul>
              </AddressColumn>
            </LinksSection>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <CopyrightSection>
              <p>
                Copyright &#169; Auto Shop Pay {currentYear()}. All rights
                reserved.
              </p>
              <p>
                Design and code by{" "}
                <a
                  href="https://www.ayeteejay.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ayeteejay
                </a>
              </p>
            </CopyrightSection>
          </Col>
        </Row>
      </FooterContainer>
    </Fade>
  );
};
export default Footer;
