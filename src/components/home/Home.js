import React from "react";
import styled from "styled-components";
import Section from "./Section";

const Home = () => {
  return (
    <Container>
      <Section />
    </Container>
  );
};

export default Home;

// styled components

export const Container = styled.div`
  height: 100vh;

  // scroll-snap-type: y mandatory;
  overflow: auto;

  @media (max-width: 700px){
    height: 100%;
  }
`;
