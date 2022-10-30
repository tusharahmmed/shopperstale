import React, { useState } from "react";
import { Drawer } from "@mantine/core";
import PaymentAccordion from "./PaymentAccordion";
import { OrderButton } from "../home/Section";

const PayBtn = () => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title="Pay Here"
        padding="xl"
        size="xl"
      >
        <PaymentAccordion />
      </Drawer>

      <OrderButton onClick={() => setOpened(true)}>PAYMENT</OrderButton>
    </>
  );
};

export default PayBtn;
