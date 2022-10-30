import React from "react";
import { Link } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
// import { Fade } from "react-reveal";
import styled from "styled-components";
import PayBtn from "../shared/PayBtn";
import PayNow from "../shared/PayNow";
import MarkeplaceSlider from "./slider/MarkeplaceSlider";
// import 'react-tabs/style/react-tabs.css';

const Section = () => {
  const backgrounds = ["/images/bg/bg-3.png"];

  return (
    <>
      <Wrap imgUrl={backgrounds[0]}>
        {/* section header  */}
        <LogoWraper>
          <img src="/logo.png" alt="" />

          <BtnWrap>
            <Link to={"/how-to-order"}>
              <OrderButton>HOW TO ORDER?</OrderButton>
            </Link>
            <PayBtn />
            <Link to={"/refund-policy"}>
              <OrderButton>REFUND POLICY</OrderButton>
            </Link>
          </BtnWrap>
        </LogoWraper>

        {/* section tab */}
        <SliderWraper>
          <TabTitle>
            Shop & <br /> Ship From
          </TabTitle>
          <Tabs focusTabOnClick={false}>
            <TabList className="market-tab-list">
              <Tab className={"market-tab-item"}>India</Tab>
              <Tab className={"market-tab-item"}>UK</Tab>
              <Tab className={"market-tab-item"}>China</Tab>
            </TabList>

            <TabPanel className={"market-tab-panel"}>
              <MarkeplaceSlider country="india" />
            </TabPanel>
            <TabPanel className={"market-tab-panel"}>
              <MarkeplaceSlider country="uk" />
            </TabPanel>
            <TabPanel className={"market-tab-panel"}>
              <MarkeplaceSlider country="china" />
            </TabPanel>
          </Tabs>
        </SliderWraper>

        {/* <PayNow /> */}
      </Wrap>
    </>
  );
};

export default Section;

// styled components

export const Wrap = styled.div`
  height: 100vh;
  // background: url(${(props) => `${props.imgUrl}`});
  background-position: 99% 1%;
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  scroll-snap-align: start;

  @media (max-width: 700px){
    height: 100%;
  }
`;

// NEW STRUCTURE
export const LogoWraper = styled.div`
  width: 100%;
  margin: 6vh auto 0 auto;
  text-align: center;

  img {
    width: 200px;
    margin-bottom: 40px;

    @media (max-width: 1000px) {
      margin-bottom: 35px;
    }
    @media (max-width: 700px) {
      margin-bottom: 30px;

      margin: 0 auto 0 auto;
    }
    @media (max-width: 370px) {
      width: 150px;
      margin-bottom: 15px;
    }
  }

  a {
    text-decoration: none;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  // margin-right: 200px;

  flex-wrap: wrap;

  @media (max-width: 900px) {
    margin-right: 0px;
    justify-content: center;
  }
`;

export const OrderButton = styled.div`
  margin: 10px 20px; 

  font-family: g-ssm;
  font-weight: 900;
  height: 40px;
  width: 200px;
  border-radius: 100px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;

  font-size: 12px;
  line-height: 1.2rem;

  background: black;
  color: white;
  transition: all 0.3s;
  // opacity: 0.5;

  &:hover {
    // color: black;
    // background: white;
    // opacity: 1;
  }
`;

const SliderWraper = styled.div``;

const TabTitle = styled.h1`
  font-size: 70px;
  line-height: 75px;
  color: black;
  font-weight: 400;
  font-family: hello;
  letter-spacing: 2px;

  // background: -webkit-linear-gradient(rgb(228, 0, 70), #7b4397);
  // -webkit-background-clip: text;
  // -webkit-text-fill-color: transparent;

  @media (max-width: 1200px) {
    color: black;
    font-size: 50px;
    line-height: 55px;
  }
  @media (max-width: 900px) {
    font-size: 60px;
    line-height: 50px;
  }
  @media (max-width: 600px) {
    font-size: 40px;
    line-height: 40px;
    margin-top: 30px;
  }
`;
