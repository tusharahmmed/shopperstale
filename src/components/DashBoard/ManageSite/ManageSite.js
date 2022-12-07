import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import {
  useGetChinaSiteQuery,
  useGetIndianSiteQuery,
  useGetUkSiteQuery,
} from "../../../rtk/features/api/ApiSlice";
import SingleSite from "./SingleSite";

const ManageSite = () => {
  // get params value
  const { country } = useParams();

  // rtk hooks
  const {
    data: indiaSite,
    isError: indiaError,
    isLoading: indiaLoading,
  } = useGetIndianSiteQuery();
  const {
    data: chinaSite,
    isError: chinaError,
    isLoading: chinaLoading,
  } = useGetChinaSiteQuery();
  const {
    data: ukSite,
    isError: ukError,
    isLoading: ukLoading,
  } = useGetUkSiteQuery();

  let content = null;

  // manage india sites
  if (country === "india") {
    if (indiaLoading) {
      content = "Loading...";
    }
    if (!indiaLoading && indiaError) {
      content = "Something went wrong";
    }
    if (!indiaLoading && !indiaError && indiaSite?.length === 0) {
      content = "No site Found";
    }
    if (!indiaLoading && !indiaError && indiaSite?.length > 0) {
      content = indiaSite.map((item) => (
        <SingleSite info={item} key={item?._id} />
      ));
    }
  }

  // manage china sites
  if (country === "china") {
    if (chinaLoading) {
      content = "Loading...";
    }
    if (!chinaLoading && chinaError) {
      content = "Something went wrong";
    }
    if (!chinaLoading && !chinaError && chinaSite?.length === 0) {
      content = "No site Found";
    }
    if (!chinaLoading && !chinaError && chinaSite?.length > 0) {
      content = chinaSite.map((item) => (
        <SingleSite info={item} key={item?._id} />
      ));
    }
  }

  // manage uk sites
  if (country === "uk") {
    if (ukLoading) {
      content = "Loading...";
    }
    if (!ukLoading && ukError) {
      content = "Something went wrong";
    }
    if (!ukLoading && !ukError && ukSite?.length === 0) {
      content = "No site Found";
    }
    if (!ukLoading && !ukError && ukSite?.length > 0) {
      content = ukSite.map((item) => (
        <SingleSite info={item} key={item?._id} />
      ));
    }
  }

  return (
    <Container>
      <Wraper>{content}</Wraper>
    </Container>
  );
};

export default ManageSite;

const Container = styled.div`
  height: calc(100vh - 70px);
  overflow: scroll;
  scroll-behavior: smooth;
  padding-bottom: 100px;

  @media (max-width: 992px) {
    height: auto;
    overflow: visible;
    padding-bottom: 0px;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Wraper = styled.div`
  width: 60%;

  @media (max-width: 900px) {
    width: 100%;
  }
  @media (max-width: 700px) {
    width: 100%;
  }
`;

const Update = styled.button`
  color: white;
  padding: 10px 20px;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica,
    Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
  border-radius: 4px;
  outline: none;
  border: none;
  cursor: pointer;
  background: #3d69e1;
  font-weight: 500;
`;
