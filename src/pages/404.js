import React from "react";
import Layout from "../components/layout.js";
import styled from "styled-components";
import Fade from "react-reveal";
import { Container, Row, Col } from "react-bootstrap";
import Construction from "../images/illustrations/under-construction.svg";
import Image from "react-bootstrap/Image";
import Star from "../images/illustrations/star.svg";
import Twinkle from "../images/illustrations/star-2.svg";

const ContainerRow = styled(Row)`
  padding: 7rem 0;
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

const ErrorPage = () => {
  return (
    <Layout>
      <Fade>
        <ContainerRow>
          <ContainerSection fluid>
            <Row>
              <Col sm={{ span: 8, offset: 2 }}>
                <Image src={Construction} fluid />
              </Col>
            </Row>
          </ContainerSection>
        </ContainerRow>
      </Fade>
    </Layout>
  );
};
export default ErrorPage;
