import React, { useState } from "react";
import styled from "styled-components";
import { Drawer } from "@mantine/core";
import PaymentAccordion from "./PaymentAccordion";

const PayNow = () => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title="Pay Here"
        padding="xl"
        size="xl"
      >
        <PaymentAccordion />
      </Drawer>

      <Container>
        <div>
          <Button onClick={() => setOpened(true)}>PAY NOW</Button>
          <DownArrow src="/images/down-arrow.svg" />
        </div>
      </Container>
    </>
  );
};

export default PayNow;

const Container = styled.div`
  position: fixed;
  bottom: 0px;
  left: auto;

  div {
    display: flex;
    flex-direction: column;

    @media (max-width: 700px) {
      flex-direction: row;
    }
  }

  @media (max-width: 700px) {
    bottom: 30px;
  }
  @media (max-width: 370px) {
    bottom: 20px;
  }
`;

const Button = styled.button`
  height: 40px;
  width: 256px;
  border-radius: 100px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  border: 2px solid black;

  font-size: 12px;
  line-height: 1.2rem;
  font-family: g-ssm;
  background: white;

  
  transition: all 0.3s;
  &:hover {
    background: black;
  color: white;
  }
  @media (max-width: 700px) {
    width: 126px;
  }
`;

const DownArrow = styled.img`
    height: 40px;
    margin-bottom: 0px;
    transform: translateY(0px)
    text-align: center;
    animation: upDown 4s infinite;


    @keyframes upDown {
        0%   {transform: translateY(0px);}
        15%   {transform: translateY(0px);}
        30%  {transform: translateY(5px);}
        50%  {transform: translateY(0px);}
        75%  {transform: translateY(3px);}
        100% {transform: translateY(0px);}
      }

    @media (max-width: 700px){
        display: none;
    }
`;
