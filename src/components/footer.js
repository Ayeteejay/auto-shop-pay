import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import AspLogo from "../images/autoshop-pay-blue-logo.svg";
import Image from "react-bootstrap/Image";

const FooterContainer = styled(Container)`
  color: ${(props) => props.theme.colors.aspBlue};
  padding: 4rem 0rem;
  p {
    font-size: ${(props) => props.theme.fontSize.extraSmall};
  }
  a {
    font-weight: bold;
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
  }
  li:first-child {
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
`;

const SiteLinksColumn = styled.div``;

const SocialLinksColumn = styled.div``;

const CopyrightSection = styled.div`
  border-top: 1px solid ${(props) => props.theme.colors.aspBlue};
  display: flex;
  padding: 1rem 0 0 0;
  justify-content: space-between;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Row>
        <Col sm={4}>
          <CompanyLogo src={AspLogo} fluid />
          <p>
            1420 Kettner Blvd. Suite 324<br></br>
            San Diego CA 92101
          </p>
        </Col>
        <Col sm={8}>
          <LinksSection>
            <SiteLinksColumn>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Pricing</li>
                <li>Insights</li>
                <li>Contact</li>
              </ul>
            </SiteLinksColumn>
            <SocialLinksColumn>
              <p>something</p>
            </SocialLinksColumn>
          </LinksSection>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <CopyrightSection>
            <p>Copyright &#169; Auto Shop Pay 2020.</p>
            <p>
              Design and code by <a href="">Ayeteejay</a>
            </p>
          </CopyrightSection>
        </Col>
      </Row>
    </FooterContainer>
  );
};
export default Footer;
