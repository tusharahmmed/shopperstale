import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../home/Home";
import { BtnWrap, LogoWraper, OrderButton, Wrap } from "../home/Section";
import PayNow from "../shared/PayNow";
import Steps from "./Steps";

const RefundPolicy = () => {
  return (
    <Container>
      <Wrap>
        <LogoWraper>
          <img src="/logo.png" alt="" />

          <BtnWrap>
            <Link to="../">
              <OrderButton>Back</OrderButton>
            </Link>
          </BtnWrap>
        </LogoWraper>

        <Steps />

        <PayNow />
      </Wrap>
    </Container>
  );
};

export default RefundPolicy;
