import React from "react";
import styled from "styled-components";
import { useState } from "react";
import {
  Container,
  InputLabel,
  InputWraper,
  SubmitButto,
  Wraper,
} from "../../Logins/Login";
import swal from "sweetalert";
import { LoadingOverlay, Select } from "@mantine/core";
import DropFilezone from "../../shared/DropFilezone";
import { useForm } from "react-hook-form";
import { useAddNewSiteMutation } from "../../../rtk/features/api/ApiSlice";
import { useEffect } from "react";

const AddNewSite = () => {
  // states
  const [country, setCountry] = useState("");
  const [thumb, setThumb] = useState("");

  // rtk hooks
  const [addNewSite, {isLoading, isError,isSuccess}] = useAddNewSiteMutation();

  // hook form
  const { register, handleSubmit,reset } = useForm();

  const onSubmit = (data) => {
    data.country = country;
    data.img = thumb;

    // validate
    if (data.country === "") {
      swal("Please Select Country", "");
      return;
    }
    if (data.img === "") {
      swal("Please Select Thumbnail", "");
      return;
    }

    // after valid
    addNewSite(data);
  };


  // after response
 useEffect(()=>{
  if(isError){
    swal({icon: "warning",title: "Opps!",text: "Something went wrong."})
  }
  if(isSuccess){
    setCountry("")
    setThumb("")
    reset()
    swal({icon: "success",title: "Good Job",text: "You have successfully added new site"})
  }
 },[isError,isSuccess])


  return (
    <RootContainer>
      <FormWraper>
        {isLoading && <LoadingOverlay visible={true} overlayBlur={2} />}
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputWraperWidth>
            <InputLabel>Name</InputLabel>
            <input {...register("name", { required: true })} type="text" />
          </InputWraperWidth>

          <InputWraperWidth>
            <InputLabel>URL</InputLabel>
            <input {...register("url", { required: true })} type="text" />
          </InputWraperWidth>

          <InputWraperWidth>
            <InputLabel>Country</InputLabel>
            <Select
              onChange={(value) => {
                setCountry(value);
              }}
              value={country}
              // {...register("country",{required: true})}
              placeholder="select"
              data={[
                { value: "india", label: "India" },
                { value: "uk", label: "UK" },
                { value: "china", label: "China" },
              ]}
            />
          </InputWraperWidth>

          <ThumbInputWraperWidth>
            <InputLabel>Thumbnail</InputLabel>
            <DropFilezone
              fileState={thumb}
              setFileState={setThumb}
              acceptedFiles={{
                "image/jpeg": [".jpeg"],
                "image/png": [".png"],
              }}
              maxNumber={1}
            />
          </ThumbInputWraperWidth>

          <InputWraperWidth>
            <SubmitButto type="submit">ADD WEBSITE</SubmitButto>
          </InputWraperWidth>
        </form>
      </FormWraper>
    </RootContainer>
  );
};

export default AddNewSite;

const RootContainer = styled(Container)`
  margin-left: 50px;
  margin-top: 20px;
  height: 100%;
  padding-bottom: 20px;

  @media (max-width: 768px) {
    margin-left: 0px;
    margin-top: 0px;
  }
  @media (max-width: 1200px) {
    margin-left: 0px;
    margin-top: 0px;
  }
`;

const InputWraperWidth = styled(InputWraper)`
  width: 332px;
`;

const ThumbInputWraperWidth = styled(InputWraperWidth)`
  grid-column: 2 / span 1;
  grid-row: 1 / span 3;

  @media (max-width: 992px) {
    grid-column: 1/ span 2;
    grid-row: 1 / span 1;
  }
`;
const FormWraper = styled(Wraper)`
  width: 80%;
  margin-left: 0px;
  position: relative;

  form {
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media (max-width: 992px) {
      display: flex;
      flex-direction: column;
    }
    @media (max-width: 1200px) {
      grid-column-gap: 10px;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0px;
  }
  @media (max-width: 1200px) {
    width: 100%;
    margin-left: 0px;
  }
`;
