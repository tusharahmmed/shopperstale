import React, { useState } from "react";
import styled from "styled-components";
import { Modal } from "@mantine/core";

import { BiPencil } from "react-icons/bi";
import UserModal from "./UserModal";

const UserSettings = () => {
  const [editable, setEditable] = useState(false);

  return (
    <>
      <Container>
        <Wrap>
          <Thumb>
            <img src="https://randomuser.me/api/portraits/men/0.jpg" alt="" />
          </Thumb>
          <Info>
            <InfoWrap>
              <h2>Mr. Ab Barik</h2>
              <p>Email: ab@gmail.com</p>
              <p>Phone: +880 1777 888547</p>
              <p>Role: Admin</p>
              <span>
                <BiPencil size={22} onClick={()=> setEditable(true)} />
              </span>
            </InfoWrap>
          </Info>
        </Wrap>
      </Container>

      <Modal
        opened={editable}
        onClose={() => setEditable(false)}
        title="Edit Profile"
      >
        {/* Modal content */}
        <UserModal />
      </Modal>
    </>
  );
};

export default UserSettings;

const Container = styled.div``;
const Wrap = styled.div`
  box-shadow: 1px 1px 3px;
  border-radius: 6px;
`;
const Thumb = styled.div`
  height: 180px;
  background-image: url("https://images.ctfassets.net/7thvzrs93dvf/wpImage18643/2f45c72db7876d2f40623a8b09a88b17/linkedin-default-background-cover-photo-1.png?w=790&h=196&q=90&fm=png");
  background-size: cover;
  background-position: center;
  position: relative;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  img {
    border-radius: 999px;
    border: 4px solid #fff;
    position: absolute;
    bottom: -20%;
    left: 2.5%;
    width: 128px;
  }
`;

const Info = styled.div`
  padding: 3rem 1rem 2rem;
`;
const InfoWrap = styled.div`
  position: relative;
  h2 {
    margin-bottom: 10px;
  }
  p {
    margin-bottom: 5px;
  }
  span {
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
  }
`;
