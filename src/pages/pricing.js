import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../components/layout.js";

const ContainerRow = styled(Row)`
  padding: 7rem 0;
  h1 {
    color: white;
  }
  background-color: ${(props) =>
    props.backgroundcolor || props.theme.colors.aspLightBlue};
  a {
    color: ${(props) => props.theme.colors.aspDarkYellow};
  }
  @media only screen and (max-width: ${(props) =>
      props.theme.breakPoints.small}) {
    padding: 4rem 0;
  }
`;

const ContainerSection = styled(Container)`
  width: 75%;
`;
const HeroSection = styled.div`
  padding: 0 3rem 0 0;
  p {
    padding: 0 0 1.3rem 0;
    color: ${(props) => props.theme.colors.aspDarkYellow};
  }
  @media only screen and (max-width: ${(props) =>
      props.theme.breakPoints.small}) {
    padding: 1rem 0 0 0;
  }
`;

const Pricing = () => {
  return (
    <Layout>
      <ContainerRow backgroundcolor={(props) => props.theme.colors.aspBlue}>
        <ContainerSection fluid>
          <Row>
            <Col sm={6}>
              <HeroSection>
                <h1>Pricing</h1>
                <p>Simple, flat rate merchant services.</p>
              </HeroSection>
            </Col>
          </Row>
        </ContainerSection>
      </ContainerRow>
    </Layout>
  );
};
export default Pricing;
