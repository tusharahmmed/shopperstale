import React from "react";
import styled from "styled-components";

const Steps = () => {
  return (
   
     <StepsWraper>
      {/* <Thumb>
        <img src="/images/video.png" alt="" />
      </Thumb> */}

      <SideText>
        <h2>Follow these simple steps</h2>
        <ul>
          <li>Pick your product from offerd sites </li>
          <li>Send the prduct link via chat box</li>
          <li>We will quote your shopping cost</li>
          <li>Confirm your order</li>
          <li>Pay 50% of your total cost</li>
          <li>We'll order your product</li>
          <li>We'll receive your product @ our warehouse</li>
          <li>You will receive your product in maximum 21 days</li>
        </ul>
      </SideText>
     </StepsWraper>
    
  );
};

export default Steps;

export const StepsWraper = styled.div`
  display: flex;
  justify-content: left;
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
