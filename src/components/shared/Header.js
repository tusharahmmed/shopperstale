import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {


  return (
    <Container>
      <Menu>
        <marquee>
          <span>Order Form India! </span>
          <span>Quickest Delivery</span>
          <span>Order Form UK! </span>
          <span>Quickest Delivery</span>
          <span>Order Form China! </span>
          <span>Quickest Delivery</span>
          
        </marquee>
      </Menu>
    </Container>
  );
};

export default Header;

// styled components

const Container = styled.div`
  min-height: 56px;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  display: flex;
  align-items: center;
  padding: 0 0 8px;
  font-weight: 500;
  z-index: 1;

  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    height: 16px;
    width: 110px;
    margin-left: 16px;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    min-height: 45px;
    padding: 15px 0;
    position: relative
  }
`;

export const Logo = styled.span`
  font-family: hello;
  font-weight: 800;
  letter-spacing: 3px;

  a {
    font-size: 26px;
    text-decoration: none;

    @media (max-widht: 900){
      font-size: 22px;
    }
    @media (max-widht: 700){
      font-size: 18px;
    }
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 8px;

  marquee {
    font-size: 18px;

    span {
      padding-left: 150px;
      padding-right: 150px;
      font-weight: 600;
    }

    @media (max-width: 1200px) {
      // width: 500px;
    }
    @media (max-width: 1000px) {
      // width: 400px;
    }
    @media (max-width: 700px) {
      // display: none;
      // width: 200px;
    }
  }

  span {
    margin: 0 8px;
  }

  @media (max-width: 1200px) {
    // display: none;
  }
`;
