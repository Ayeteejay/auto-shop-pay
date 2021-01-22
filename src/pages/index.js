import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { Row, Col, Container } from "react-bootstrap";
import Layout from "../components/layout.js";
import Fade from "react-reveal";
import Slide from "react-reveal/Slide";
import HeroIllustration from "../images/autoshoppay-hero.svg";
import MechanicPicture from "../images/mechanic.jpg";
import Image from "react-bootstrap/Image";
import LowestPrices from "../images/icons/lowest-prices-icon.svg";
import NoContracts from "../images/icons/no-contracts-icon.svg";
import SaveMoney from "../images/icons/save-money-icon.svg";
import EasyDevices from "../images/icons/easy-devices-icon.svg";
import Biker from "../images/illustrations/motorcycle-homie.svg";
import Customer from "../images/customer-quote.jpg";

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
  @media only screen and (max-width: ${(props) =>
      props.theme.breakPoints.small}) {
    padding: 1rem 0 0 0;
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
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  @media only screen and (max-width: ${(props) =>
      props.theme.breakPoints.small}) {
    padding: 1rem 0;
  }
  span {
    font-weight: 900;
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
`;

const SecondaryCallToAction = styled(Link)`
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid ${(props) => props.theme.colors.aspBlue};
  padding: 1rem 2rem;
  color: ${(props) => props.theme.colors.aspBlue}!important;
  transition: 0.3s;
  :hover {
    text-decoration: none;
    color: white !important;
    background-color: ${(props) => props.theme.colors.aspBlue};
  }
`;

const QuickFactColumn = styled.div`
  transition: 0.3s;
  background-color: white;
  padding: 2.5rem;
  :hover {
    transform: translate(-10px, -20px);
    box-shadow: 15px 15px ${(props) => props.theme.colors.aspBlue};
  }
  @media only screen and (max-width: ${(props) =>
      props.theme.breakPoints.large}) {
    margin: 1rem 0;
  }
  a {
    transition: 0.3s;
  }
  a:hover {
    color: ${(props) => props.theme.colors.aspBlue};
    text-decoration: none;
  }
`;

const Icons = styled(Image)`
  max-width: 45px;
  transition: 0.3s;
  :hover {
    transform: translate(0, -10px);
  }
`;

const AdditionalFactsSection = styled.div`
  padding: 0 0 1rem 0;
`;

const AdditionalFactsImageColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  img {
    width: 700px;
    padding: 1rem;
  }
`;

const AdditionalFactsColumn = styled.div`
  padding: 1rem 0 0 0;
  @media only screen and (max-width: ${(props) =>
      props.theme.breakPoints.small}) {
    margin: 1rem 0;
    padding: 0;
  }
`;

const CustomerQuoteSection = styled(Row)`
  background-color: ${(props) => props.theme.colors.aspLightBlue};
  transition: 0.3s;
  :hover {
    transform: translate(-10px, -20px);
    box-shadow: 15px 15px ${(props) => props.theme.colors.aspBlue};
  }
  .bold-statement {
    color: ${(props) => props.theme.colors.aspBlue};
    font-size: ${(props) => props.theme.fontSize.smallMedium};
    line-height: 2.3rem;
    font-weight: 200;
  }
  .quote-column {
    padding: 4rem;
    height: 100%;
    display: flex;
    flex-flow: column;
    justify-content: center;
  }
  .quote-image-column {
    background-image: url(${Customer});
    height: 100%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .quote-person {
    color: ${(props) => props.theme.colors.aspBlue};
  }
  @media only screen and (max-width: ${(props) =>
      props.theme.breakPoints.small}) {
    .quote-column {
      padding: 2rem;
    }
    .bold-statement {
      font-size: ${(props) => props.theme.fontSize.small};
      line-height: 1.5rem;
    }
  }
`;

const IndexPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <Fade>
        <ContainerRow>
          <ContainerSection fluid>
            <Row>
              <Col md={{ span: 6, order: 1 }} xs={{ span: 12, order: 2 }}>
                <HeroSection>
                  <h1>Payments Simplified</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    hendrerit nisi sed sollicitudin pellentesque posuere purus
                    rhoncus. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.
                  </p>
                  <CallToAction to="/contact">
                    Book Appointment &#8594;
                  </CallToAction>
                  <p className="details">Take the $100 challenge today!</p>
                </HeroSection>
              </Col>
              <Col md={{ span: 6, order: 2 }} xs={{ span: 12, order: 1 }}>
                <Image src={HeroIllustration} fluid />
              </Col>
            </Row>
          </ContainerSection>
        </ContainerRow>
      </Fade>
      {/* Difference Section */}
      <Fade>
        <ContainerRow backgroundcolor="white">
          <ContainerSection fluid>
            <Row>
              <Col sm={12}>
                <IntroSection>
                  <h5>The Auto Shop Pay difference</h5>
                  <h2>We make getting paid, simple.</h2>
                  <p>1.7% for swiped transactions!</p>
                  <SecondaryCallToAction to="/">
                    Learn more about pricing &#8594;
                  </SecondaryCallToAction>
                </IntroSection>
              </Col>
            </Row>
            <Row>
              <Col sm={6}>
                <DescriptionSection>
                  <div>
                    <p className="bold-statement">
                      Eliminate complicated fees and statements. Experience
                      simple, low cost, flat rate merchant services...
                    </p>
                    <p>
                      Merchant services are confusing and often corrupt, with
                      you as the victim. From opaque sales process to confusing
                      statements these egregious practices erode your
                      profitability month after month.
                    </p>
                    <p>
                      Since we only work with the auto industry we have the
                      expertise to get you tuned up and saving money quickly.
                    </p>
                    <p>
                      Our experience in simplifying payment technology enables
                      us to deliver the perfect program for your shop.
                    </p>
                    <p>
                      We work with numerous vendors to obtain the lowest cost
                      solutions so you don’t have to go through the headache of
                      sourcing and negotiation.
                    </p>
                  </div>
                </DescriptionSection>
              </Col>
              <Col sm={6}>
                <Fade>
                  <DescriptionSection>
                    <Image
                      src={MechanicPicture}
                      fluid
                      alt="Mechanic hard at work."
                    />
                  </DescriptionSection>
                </Fade>
              </Col>
            </Row>
          </ContainerSection>
        </ContainerRow>
      </Fade>
      {/* Four Quick Facts Section */}
      <Fade>
        <ContainerRow>
          <ContainerSection fluid>
            <Row>
              <Col lg={3}>
                <Fade bottom>
                  <QuickFactColumn>
                    <h5>Payments Simplified</h5>
                    <h4>Simple, flat rate pricing</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nam hendrerit nisi sed sollicitudin pellentesque posuere
                      purus rhoncus.
                    </p>
                    <Link to="/">Learn more &#8594;</Link>
                  </QuickFactColumn>
                </Fade>
              </Col>
              <Col lg={3}>
                <Fade bottom>
                  <QuickFactColumn>
                    <h5>The freedom of month-to-month</h5>
                    <h4>No contracts</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nam hendrerit nisi sed sollicitudin pellentesque posuere
                      purus rhoncus.
                    </p>
                    <Link to="/">Learn more &#8594;</Link>
                  </QuickFactColumn>
                </Fade>
              </Col>
              <Col lg={3}>
                <Fade bottom>
                  <QuickFactColumn>
                    <h5>Abosolute best industry pricing</h5>
                    <h4>Significant savings</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nam hendrerit nisi sed sollicitudin pellentesque posuere
                      purus rhoncus.
                    </p>
                    <Link to="/">Learn more &#8594;</Link>
                  </QuickFactColumn>
                </Fade>
              </Col>
              <Col lg={3}>
                <Fade bottom>
                  <QuickFactColumn>
                    <h5>Works across multiple platforms</h5>
                    <h4>Easy integration</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nam hendrerit nisi sed sollicitudin pellentesque posuere
                      purus rhoncus.
                    </p>
                    <Link to="/">Learn more &#8594;</Link>
                  </QuickFactColumn>
                </Fade>
              </Col>
            </Row>
          </ContainerSection>
        </ContainerRow>
      </Fade>
      {/* Additional Facts Section */}
      <Fade>
        <ContainerRow backgroundcolor="white">
          <ContainerSection fluid>
            <Row>
              <Col sm={6}>
                <AdditionalFactsImageColumn>
                  <Slide left>
                    <Image src={Biker} fluid />
                  </Slide>
                </AdditionalFactsImageColumn>
              </Col>
              <Col sm={6}>
                <Row>
                  <Col sm={12}>
                    <AdditionalFactsSection>
                      <h5>At a glance</h5>
                      <h2>Payments Simplified.</h2>
                    </AdditionalFactsSection>
                  </Col>
                </Row>
                <Row>
                  <Col sm={6}>
                    <AdditionalFactsColumn>
                      <Fade bottom>
                        <Icons src={LowestPrices} fluid />
                      </Fade>
                      <h4>Lowest prices</h4>
                      <p>
                        Our network and experience in the industry has given us
                        exclusive pricing for the auto industry.
                      </p>
                    </AdditionalFactsColumn>
                  </Col>
                  <Col sm={6}>
                    <AdditionalFactsColumn>
                      <Fade bottom>
                        <Icons src={NoContracts} fluid />
                      </Fade>
                      <h4>No contracts</h4>
                      <p>
                        We don't force you to stay with us. But our simple
                        pricing plans and great service make it hard to leave.
                      </p>
                    </AdditionalFactsColumn>
                  </Col>
                  <Col sm={6}>
                    <AdditionalFactsColumn>
                      <Fade bottom>
                        <Icons src={SaveMoney} fluid />
                      </Fade>
                      <h4>Save money</h4>
                      <p>
                        Our clients save a significant amount of money on card
                        processing fees, improving margins and profitability.
                      </p>
                    </AdditionalFactsColumn>
                  </Col>
                  <Col sm={6}>
                    <AdditionalFactsColumn>
                      <Fade bottom>
                        <Icons src={EasyDevices} fluid />
                      </Fade>
                      <h4>Easy devices</h4>
                      <p>
                        We work across numerous hardware and software options,
                        making it easy for you to start saving today.
                      </p>
                    </AdditionalFactsColumn>
                  </Col>
                </Row>
              </Col>
            </Row>
          </ContainerSection>
        </ContainerRow>
        {/* Customer Quote Section */}
        <Row>
          <ContainerSection fluid>
            <CustomerQuoteSection>
              <Col sm={3} className="p-0">
                <div className="quote-image-column"></div>
              </Col>
              <Col sm={9}>
                <div className="quote-column">
                  <p className="bold-statement">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nam hendrerit nisi sed sollicitudin pellentesque posuere
                    purus rhoncus. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Lorem ipsum dolor sit dolor lorem ipsum."
                  </p>
                  <p className="quote-person">
                    <strong>John Doe</strong>
                    <br />
                    North Park Auto Repair
                  </p>
                </div>
              </Col>
            </CustomerQuoteSection>
          </ContainerSection>
        </Row>
      </Fade>
    </Layout>
  );
};

export default IndexPage;
