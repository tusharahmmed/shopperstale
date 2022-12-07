import React from "react";
import styled from "styled-components";

const SliderItem = ({ data: { img, url, name } }) => {
  const handleLink = () => {
    // opne site url
    window.open(url, "_blank");
  };
  return (
    <ItemContainer title={name} img={img}>
      <div>
        <ShopBtn onClick={handleLink}>Shop Now</ShopBtn>
      </div>
    </ItemContainer>
  );
};

export default SliderItem;

// styled components

export const ItemContainer = styled.div`
  width: 100%;
  height: 150px;
  background-image: url(${(props) => props.img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;

  border: 2px solid black;

  position: relative;

  div {
    position: absolute;
    bottom: 8px;
    left: 0px;
    right: 0px;
    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const ShopBtn = styled.button`
  width: 40%;
  height: 28px;
  background: #3d69e1;
  text-align: center;
  color: white;
  border: none;
  font-size: 12px;
  font-weight: 600;
  border-radius: 999px;
  margin-top: 10px;
  cursor: pointer;
  font-family: g-ssm;

  border: 2px solid black;
  background: white;
  color: black;
  transition: all 0.3s;

  &:hover {
    color: white;
    background: black;
  }
`;
