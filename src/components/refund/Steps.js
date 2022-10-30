import React from "react";
import styled from "styled-components";

const Steps = () => {
  return (
    <StepsWraper>
      {/* <Thumb>
        <img src="/images/video.png" alt="" />
      </Thumb> */}

      <SideText>
        <h2>Refund Policy</h2>
        <ul>
          <li>90% change is applicable if the product order is changed or canceled after confirming the order.<br /> Balance amount will be returned in 3 working days.</li>
          <li>No refund/return or exchange will be accepted after product arrival and at the time of delivery</li>
          <li>For orders with value below 1000 BDT, the full product price has to be paid at the time of placing the order.</li>
          <li>Shipping charge will be requested to be paid upon delivery.</li>
          
        </ul>
      </SideText>
    </StepsWraper>
  );
};

export default Steps;

export const StepsWraper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20vh;

  @media (max-width: 1200px) {
    padding-bottom: 40vh;
  }
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Thumb = styled.div`
  width: 36%;
  margin-right: 200px;

  img {
    width: 100%;
    cursor: pointer;
  }

  @media (max-width: 1200px) {
    margin-right: 100px;
  }
  @media (max-width: 900px) {
    margin-right: 0px;
    margin-bottom: 60px;
    margin-top: 60px;
  }
  @media (max-width: 600px) {
    width: 56%;
    margin-bottom: 30px;
    margin-top: 30px;
  }
  @media (max-width: 400px) {
    width: 56%;
    margin-bottom: 10px;
    margin-top: 10px;
  }
`;
export const SideText = styled.div`
  font-family: g-ssm;
  h2 {
    margin-bottom: 30px;
    color: black;

    @media (max-width: 400px) {
      margin-bottom: 15px;
    }
  }
  ul {
    margin-left: 20px;
    li {
      margin-bottom: 10px;
      color: black;
    }
  }

  @media (max-width: 900px) {
    // margin-left: 80px;
  }
  @media (max-width: 600px) {
    // margin-left: 30px;
    padding: 20px 10px;

  }
`;
