import React from "react";
import PayBtn from "../shared/PayBtn";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import MarkeplaceSlider from "./slider/MarkeplaceSlider";
import {
  useGetChinaSiteQuery,
  useGetIndianSiteQuery,
  useGetUkSiteQuery,
} from "../../rtk/features/api/ApiSlice";

const Section = () => {
  const backgrounds = ["/images/bg/bg-3.png"];

  // indian site
  const {
    data: indiaSites,
    isLoading: indiaLoading,
    isError: indiaError,
  } = useGetIndianSiteQuery();

  let indiaTab = null;
  if (indiaLoading) {
    indiaTab = "Loading";
  }
  if (!indiaLoading && indiaError) {
    indiaTab = "Something went wrong";
  }
  if (!indiaLoading && !indiaError && indiaSites?.length === 0) {
    indiaTab = "No site found";
  }
  if (!indiaLoading && !indiaError && indiaSites?.length > 0) {
    indiaTab = <MarkeplaceSlider sites={indiaSites} />;
  }

  // china site
  const {
    data: chinaSites,
    isLoading: chinaLoading,
    isError: chinaError,
  } = useGetChinaSiteQuery();

  let chinaTab = null;
  if (chinaLoading) {
    chinaTab = "Loading";
  }
  if (!chinaLoading && chinaError) {
    chinaTab = "Something went wrong";
  }
  if (!chinaLoading && !chinaError && chinaSites?.length === 0) {
    chinaTab = "No site found";
  }
  if (!chinaLoading && !chinaError && chinaSites?.length > 0) {
    chinaTab = <MarkeplaceSlider sites={chinaSites} />;
  }

  // china site
  const {
    data: ukSites,
    isLoading: ukLoading,
    isError: ukError,
  } = useGetUkSiteQuery();

  let ukTab = null;
  if (ukLoading) {
    ukTab = "Loading";
  }
  if (!ukLoading && ukError) {
    ukTab = "Something went wrong";
  }
  if (!ukLoading && !ukError && ukSites?.length === 0) {
    ukTab = "No site found";
  }
  if (!ukLoading && !ukError && ukSites?.length > 0) {
    ukTab = <MarkeplaceSlider sites={ukSites} />;
  }

  // section content
  let section = null;
  if (indiaLoading || chinaLoading || ukLoading) {
    section = <Message>Loading...</Message>;
  }
  if (indiaError || chinaError || ukError) {
    section = <Message>Something went wrong. Please reload the page</Message>;
  }

  if (indiaSites?.length > 0 && chinaSites?.length > 0 && ukSites?.length > 0) {
    section = (
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

          <TabPanel className={"market-tab-panel"}>{indiaTab}</TabPanel>
          <TabPanel className={"market-tab-panel"}>{ukTab}</TabPanel>
          <TabPanel className={"market-tab-panel"}>{chinaTab}</TabPanel>
        </Tabs>
      </SliderWraper>
    );
  }

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
        {section}

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

  @media (max-width: 700px) {
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

const Message = styled.div`
  padding-bottom: 30vh;

  @media (max-width: 900px) {
    padding-bottom: 40vh;
  }
  @media (max-width: 700px) {
    padding-top: 5vh;
    padding-bottom: 0vh;
  }
`;
