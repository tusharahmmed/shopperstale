import { TextInput } from "@mantine/core";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

import DropFilezone from "../../shared/DropFilezone";

const ModalContent = () => {
  // states
  const [logo, setLogo] = useState("");
  const [qrcode, setQrcode] = useState("");
  

  // hook form
  const { register, handleSubmit, } = useForm();



  const onSubmit = data => {
    data.logo = logo;
    data.qrcode = qrcode;

    // validate
    if(data.logo === "" || data.qrcode === ""){
      alert("please insert images");
    }else{
      console.log(data)
    }

  }

  

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput {...register("methodName",{required: true})} placeholder="Method Name" label="Name" withAsterisk />
        <TextInput {...register("methodDescription",{required: 'true'})} placeholder="Method Description" label="Description" />
        <CustomInput>
          <p>
            Logo <span>*</span>
          </p>
          <DropFilezone
            fileState={logo}
            setFileState={setLogo}
            acceptedFiles={{
              "image/jpeg": [".jpeg"],
              "image/png": [".png"],
            }}
            maxNumber={1}
          />
        </CustomInput>

        <CustomInput>
          <p>
            QR Code <span>*</span>
          </p>
          <DropFilezone
            fileState={qrcode}
            setFileState={setQrcode}
            acceptedFiles={{
              "image/jpeg": [".jpeg"],
              "image/png": [".png"],
            }}
            maxNumber={1}
          />
        </CustomInput>

        <Upload disabled={false}>UPLOAD</Upload>
      </form>
    </Container>
  );
};

export default ModalContent;

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
  background: ${(props)=> props?.disabled? 'gray': '#3d69e1'};
  color: white;
  padding: 10px;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica,
    Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
  border-radius: 4px;
  outline: none;
  border: none;
  cursor: pointer;
`;
