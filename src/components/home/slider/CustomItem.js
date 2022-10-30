import React, { useState } from "react";
import styled from "styled-components";
import { ItemContainer, ShopBtn } from "./SliderItem";

import { Modal, Button, Group } from "@mantine/core";

import { SideText, StepsWraper } from "../../howToOrder/Steps";

const CustomItem = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Modal opened={open} onClose={() => setOpen(false)}>
        {/* Modal content */}
        <StepsWraper>
          <SideText>
            <h2>Follow these simple steps</h2>
            <ul style={{fontSize: '14px'}}>
              <li>
                Send us your product link from the sites mentioned on our site.
              </li>
              <li style={{ listStyleType: "none",textAlign: 'center' }}>Or</li>
              <li>
                If you have links from any other sites than the ones mentioned
                on ours, just send us the link.
              </li>
              <li style={{ listStyleType: "none",textAlign: 'center'  }}>Or</li>
              <li>
                If you don't have any link, but just have the product photo,
                send us the product photo, name and specification (if any)<br />
                <br/>{" "}
                <ul>
                  <li>please use whatsapp or our facebook page messenger.</li>
                  <li>
                    or you can call us directly on{" "}
                    <a href="tel:+8801894620216">01894620216</a>
                    (between 10 am and 9pm)
                  </li>
                </ul>
              </li>
              <li>
                You will receive a quotation from us within the shortest
                possible time.
              </li>
              <li>
                If you agree with the quotation, we will ask for 50% deposit of
                the total quoted amount.
              </li>
              <li>You will receive an invoice confirming the order.</li>
              <li>
                We will proceed with your order and bring it to Bangladesh.
              </li>
              <li>
                You'll be notified to settle the due balance amount and can
                either collect the shipment from one of our locations or can
                book delivery to your address.
              </li>
            </ul>
          </SideText>
        </StepsWraper>
      </Modal>

      <ItemContainer title="custom">
        <Title>MORE OPTIONS</Title>
        <div>
          <ShopBtn onClick={() => setOpen(!open)}>MORE</ShopBtn>
        </div>
      </ItemContainer>
    </>
  );
};

export default CustomItem;

const Title = styled.h2`
  font-family: g-ssm;
  text-align: center;
  margin-top: 40px;
`;
