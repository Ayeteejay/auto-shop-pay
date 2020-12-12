import * as React from "react";
import styled from "styled-components";
import { Row, Col, Container } from "react-bootstrap";
import Layout from "../components/layout.js";
import Fade from "react-reveal";
import HeroIllustration from "../images/autoshoppay-hero.svg";
import MechanicPicture from "../images/mechanic.jpg";
import Image from "react-bootstrap/Image";

const ContainerRow = styled(Row)`
  padding: 7rem 0;
  background-color: ${(props) =>
    props.backgroundColor || props.theme.colors.aspLightYellow};
  a {
    color: ${(props) => props.theme.colors.aspDarkYellow};
  }
`;
const HeroSection = styled.div`
  padding: 0 3rem 0 0;
  p {
    padding: 0 0 1.3rem 0;
  }
  .details {
    color: rgba(0, 0, 0, 0.4);
    font-size: 0.8rem;
    padding: 1.2rem 0 0 0;
  }
`;
const IntroSection = styled.div`
  padding: 0rem;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

const DescriptionSection = styled.div`
  padding: 4rem 0;
  .bold-statement {
    color: ${(props) => props.theme.colors.aspDarkYellow};
    font-size: ${(props) => props.theme.fontSize.smallMedium};
    line-height: 2.3rem;
    font-weight: 200;
  }
`;
const CallToAction = styled.a`
  background-color: ${(props) => props.theme.colors.aspBlue};
  padding: 1rem 2rem;
  color: white !important;
  border-radius: 0.2rem;
  transition: 0.3s;
  :hover {
    text-decoration: none;
    background-color: ${(props) => props.theme.colors.aspDarkYellow};
  }
`;

const SecondaryCallToAction = styled.a`
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid ${(props) => props.theme.colors.aspBlue};
  padding: 1rem 2rem;
  color: ${(props) => props.theme.colors.aspBlue}!important;
  border-radius: 0.2rem;
  transition: 0.3s;
  :hover {
    text-decoration: none;
    color: white !important;
    background-color: ${(props) => props.theme.colors.aspBlue};
  }
`;

const IndexPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <Fade>
        <ContainerRow>
          <Container>
            <Row>
              <Col sm={6}>
                <HeroSection>
                  <h1>Payments Simplified</h1>
                  <p>
                    Etsy street art semiotics trust fund messenger bag man bun
                    shoreditch cray migas jianbing air plant snackwave you
                    probably haven't heard of them poke chambray.
                  </p>
                  <CallToAction href="/">Book Appointment &#8594;</CallToAction>
                  <p className="details">Take the $100 challenge today!</p>
                </HeroSection>
              </Col>
              <Col sm={6}>
                <Image src={HeroIllustration} fluid />
              </Col>
            </Row>
          </Container>
        </ContainerRow>
      </Fade>
      {/* Difference Section */}
      <Fade>
        <ContainerRow backgroundColor="white">
          <Container>
            <Row>
              <Col sm={12}>
                <IntroSection>
                  <h5>The Auto Shop Pay difference</h5>
                  <h2>We make getting paid, simple.</h2>
                  <p>1.7% for swiped transactions!</p>
                  <SecondaryCallToAction href="/">
                    Learn more about pricing &#8594;
                  </SecondaryCallToAction>
                </IntroSection>
              </Col>
            </Row>
            <Row>
              <Col sm={6}>
                <DescriptionSection>
                  <p className="bold-statement">
                    Eliminate complicated fees and statements. Experience
                    simple, low cost, flat rate merchant services...
                  </p>
                  <p>
                    Merchant services are confusing and often corrupt, with YOU
                    as the victim. From opaque sales process to confusing
                    statements these egregious practices erode your
                    profitability month after month.
                  </p>
                  <p>
                    Since we only work with the auto industry we have the
                    expertise to get you tuned up and saving money quickly.
                  </p>
                  <p>
                    Our experience in simplifying payment technology enables us
                    to deliver the perfect program for your shop.
                  </p>
                  <p>
                    We work with numerous vendors to obtain the lowest cost
                    solutions so you don’t have to go through the headache of
                    sourcing and negotiation.{" "}
                  </p>
                </DescriptionSection>
              </Col>
              <Col sm={6}>
                <Fade bottom>
                  <DescriptionSection>
                    <Image src={MechanicPicture} fluid />
                  </DescriptionSection>
                </Fade>
              </Col>
            </Row>
          </Container>
        </ContainerRow>
      </Fade>
      {/* Four Quick Facts Section */}
      <Fade>
        <ContainerRow>
          <Container>
            <Row>
              <Col sm={3}>
                <h5>Payments Simplified</h5>
                <h4>Simple, flat rate pricing</h4>
                <p>
                  Pour-over franzen jianbing wayfarers, swag authentic before
                  they sold out. Fanny pack selvage banjo intelligentsia vinyl
                  man.
                </p>
                <a href="/">Learn more &#8594;</a>
              </Col>
              <Col sm={3}>
                <h5>The freedom of month-to-month</h5>
                <h4>No contracts</h4>
                <p>
                  Drinking vinegar put a bird on it cold-pressed gastropub cray
                  post-ironic brunch.
                </p>
                <a href="/">Learn more &#8594;</a>
              </Col>
              <Col sm={3}>
                <h5>Abosolute best industry pricing</h5>
                <h4>Significant savings</h4>
                <p>
                  Jianbing you probably haven't heard of them snackwave
                  wayfarers locavore truffaut banjo celiac tumblr.
                </p>
                <a href="/">Learn more &#8594;</a>
              </Col>
              <Col sm={3}>
                <h5>Payments Simplified</h5>
                <h4>Simple, flat rate pricing</h4>
                <p>
                  Cardigan occupy air plant, art party cred pug helvetica salvia
                  single-origin coffee kale chips beard shabby chic cold-pressed
                  drinking vinegar
                </p>
                <a href="/">Learn more &#8594;</a>
              </Col>
            </Row>
          </Container>
        </ContainerRow>
      </Fade>
    </Layout>
  );
};

export default IndexPage;
