import * as React from "react";
import Layout from "../components/layout.js";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";

const HeroSection = styled.div`
  background-color: #fff3e1;
`;

const CallToAction = styled.button`
  background-color: #102e57;
  padding: 1rem 2rem;
  border: none;
  color: white;
  border-radius: 0.2rem;
`;

const IndexPage = () => {
  return (
    <Layout>
      <Row>
        <Col sm={6}>
          <HeroSection>
            <h1>Payments Simplified</h1>
            <p>
              Etsy street art semiotics trust fund messenger bag man bun
              shoreditch cray migas jianbing air plant snackwave you probably
              haven't heard of them poke chambray. Helvetica direct trade
              chicharrones unicorn farm-to-table four dollar toast roof party
              raclette artisan yr.
            </p>
            <CallToAction>Book Appointment</CallToAction>
          </HeroSection>
        </Col>
        <Col sm={6}>
          <p>Image will go here</p>
        </Col>
      </Row>
    </Layout>
  );
};

export default IndexPage;
