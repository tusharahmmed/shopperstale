import React from "react";
import { Group, Avatar, Text, Accordion } from "@mantine/core";
import styled from "styled-components";

const PaymentAccordion = () => {
  const charactersList = [
    {
      id: "bkash",
      image:
        "https://www.bssnews.net/assets/news_photos/2022/06/28/image-69154-1656417659.jpg",
      label: "Bkash",
      description: "bKash is A mobile financial service in Bangladesh",
      content: "/images/pay/bkash.png",
      color: "rgb(220 55 98 / 25%)",
    },

    {
      id: "nagad",
      image:
        "https://www.observerbd.com/2021/04/20/observerbd.com_1618922147.jpg",
      label: "Nagad",
      description: "Digital Financial Service of Bangladesh Post Office",
      content: "/images/pay/nagad.png",
      color: "rgb(231 67 74 / 25%)",
    },
  ];

  function AccordionLabel({ label, image, description }) {
    return (
      <Group noWrap>
        <Avatar src={image} size="lg" />
        <div>
          <Text>{label}</Text>
          <Text size="sm" color="dimmed" weight={400}>
            {description}
          </Text>
        </div>
      </Group>
    );
  }

  const items = charactersList.map((item) => (
    <Accordion.Item value={item.id} key={item.label}>
      <Accordion.Control>
        <AccordionLabel {...item} />
      </Accordion.Control>
      <Accordion.Panel>
        <ContentWraper color={item.color}>
          <img src={item.content} alt="" />
        </ContentWraper>
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion chevronPosition="right" variant="contained">
      {items}
    </Accordion>
  );
};

export default PaymentAccordion;

// styled components

const ContentWraper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 60%;
    border: 3px solid ${(props) => props.color};

    @media (max-width: 700px) {
      border: 1px solid ${(props) => props.color};
    }
  }
`;
