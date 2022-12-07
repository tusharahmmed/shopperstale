import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Modal } from "@mantine/core";
import ModalContent from "./ModalContent";

const AddCard = ({opened,setOpened}) => {
 

  return (
    <>
      <Container onClick={()=> setOpened(true)}>
        <AiOutlinePlusCircle size={36} />
      </Container>

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Add New Payment Method"
      >
        {/* Modal content */}
        <ModalContent />
      </Modal>
    </>
  );
};

export default AddCard;

const Container = styled.div`
  width: 316px;
  height: 100%;
  background: #80808008;
  border: 2px solid #d0d1d2;
  border-radius: 18px;
  font-family: g-ssm;
  font-size: 12px;
  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
