import React from "react";
import { Group, Avatar, Text, Accordion } from "@mantine/core";
import styled from "styled-components";
import { useGetPaymentMethodsQuery } from "../../rtk/features/api/ApiSlice";

const PaymentAccordion = () => {
  // get data
  const { data: paymentList, isLoading, isError } = useGetPaymentMethodsQuery();

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

  // content conditions
  let content = null;
  if (isLoading) {
    content = "Loading...";
  }
  if (!isLoading && isError) {
  }
  if (!isLoading && !isError && paymentList?.length === 0) {
    content = "No Payment Methods Found";
  }
  if (!isLoading && !isError && paymentList?.length > 0) {
    content = paymentList.map((item) => (
      <Accordion.Item value={item.label} key={item._id}>
        <Accordion.Control>
          <AccordionLabel {...item} />
        </Accordion.Control>
        <Accordion.Panel>
          <ContentWraper color={item.color? item.color : 'white'}>
            <img src={item.content} alt="" />
          </ContentWraper>
        </Accordion.Panel>
      </Accordion.Item>
    ));
  }

  return (
    <Accordion chevronPosition="right" variant="contained">
      {content}
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
