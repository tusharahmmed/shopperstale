import { LoadingOverlay, TextInput } from "@mantine/core";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useEditUserToDbMutation } from "../../../rtk/features/api/ApiSlice";
import DropFilezone from "../../shared/DropFilezone";

const UserModal = ({userData,setEditable}) => {
 
  // states
  const [img, setImg] = useState(userData?.img);

  // rtk hook
  const [editUserToDb,{isSuccess,isLoading}] = useEditUserToDbMutation();

  // hook form
  const { register, handleSubmit } = useForm();

  const {displayName,img: currentImg,phone} = userData || {};

  const onSubmit = (data) => {
    data.img = img;

    // validate
    if (data.img === "") {
      alert("please insert images");
    } else {
      data.email = userData.email;
      editUserToDb(data)
    }
  };

  // is successfully save to db then close modal
  if(isSuccess){
    setEditable(false);
  }
  

  return (
    <Container>
      <form style={{position: 'relative'}} onSubmit={handleSubmit(onSubmit)}>
        {isLoading && <LoadingOverlay visible={true} overlayBlur={2} />}
        <CustomInput>
          <p>
            Image <span>*</span>
          </p>
          <DropFilezone
            fileState={img}
            setFileState={setImg}
            acceptedFiles={{
              "image/jpeg": [".jpeg"],
              "image/png": [".png"],
            }}
            maxNumber={1}
          />
        </CustomInput>

        <TextInput
          defaultValue={displayName}
          {...register("displayName", { required: true })}
          placeholder="Full Name"
          label="Name"
          withAsterisk
        />
        
        <TextInput
          defaultValue={phone}
          {...register("phone", { required: true })}
          placeholder="Phone"
          label="Phone"
          withAsterisk
        />

        <Upload disabled={false}>UPDATE</Upload>
      </form>
    </Container>
  );
};

export default UserModal;

const Container = styled.div``;

const CustomInput = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica,
    Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
  font-weight: 500;
  font-size: 15px;
  color: #212529;

  span {
    color: red;
  }
`;

const Upload = styled.button`
  width: 100%;
  background: ${(props) => (props?.disabled ? "gray" : "#3d69e1")};
  color: white;
  padding: 10px;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica,
    Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
  border-radius: 4px;
  outline: none;
  border: none;
  cursor: pointer;
  margin-bottom: 10px;
  margin-top: 15px;
`;
