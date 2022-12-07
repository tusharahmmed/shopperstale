// @packages
import React, { useState } from "react";
import swal from "sweetalert";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

import auth from "../../../firebase.init";
// @components
import {
  Container,
  InputLabel,
  InputWraper,
  SubmitButto,
  Wraper,
} from "../../Logins/Login";
import { LoadingOverlay } from "@mantine/core";
import { useEffect } from "react";
import { useAddUserToDbMutation } from "../../../rtk/features/api/ApiSlice";

const MakeAdmin = () => {
  // state
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({});

  const handlePwVisible = () => {
    setVisible((visible) => !visible);
  };

  // use auth
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  // rtk hooks
  const [addUserToDb, { isSuccess }] = useAddUserToDbMutation();

  // use form
  const { register, handleSubmit, reset } = useForm();

  // handle submission
  const onSubmit = (data) => {
    const pw = data.password;

    // validate
    if (pw.length > 7) {
      // check characters
      if (pw.match(/[A-Z]/) === null) {
        swal("Password must contain an upper case letter");
        return;
      }
      if (pw.match(/[a-z]/) === null) {
        swal("Password  must contain a lowercase case letter");
        return;
      }
      if (pw.match(/[0-9]/) === null) {
        swal("Password  must contain a number");
        return;
      }
      if (pw.match(/[!@#$%^&*)(_:",.]/) === null) {
        swal("Password must contain a special character");
        return;
      }

      // after validation save form data for create user request
      setFormData(data);

      // alert for confimation
      swal({
        title: "Are you sure?",
        text: "Once created, all access will given to him!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((makeAdmin) => {
        if (makeAdmin) {
          // create user
          createUserWithEmailAndPassword(data.email, pw);
        } else {
          // if admin cancel promp
          swal("Your website is safe!", {
            buttons: false,
            timer: 1000,
          });
        }
      });
    } else {
      swal("Password must be at least 8 characters");
    }
  };

  // create user to firebase response

  useEffect(() => {
    // if successfull
    if (user) {
      reset();
      // confirmation alert
      swal("Poof! You have successfully created new admin!.", {
        icon: "success",
        buttons: false,
        timer: 1000,
      });
      // save user to db
      addUserToDb(formData);
    }

    // if error
    if (error) {
      swal({
        text: `${error?.message}`,
        icon: "warning",
        button: "ok",
        dangerMode: true,
      });
    }
  }, [user, error]);

  // rtk response
  useEffect(() => {
    if (isSuccess) {
      // after save info to db clear state
      setFormData({});
    }
  }, [isSuccess]);

  return (
    <RootContainer>
      <Wraper>
        <form
          style={{ position: "relative" }}
          onSubmit={handleSubmit(onSubmit)}
        >
          {loading && <LoadingOverlay visible={true} overlayBlur={2} />}
          <InputWraper>
            <InputLabel>Name</InputLabel>
            <input {...register("displayName", { required: true })} type="text" />
          </InputWraper>

          <InputWraper>
            <InputLabel>Email Address</InputLabel>
            <input {...register("email", { required: true })} type="email" />
          </InputWraper>

          <PasswordWraper>
            <InputLabel>Password</InputLabel>
            <span>
              <input
                {...register("password", { required: true })}
                type={`${visible ? "text" : "password"}`}
                autoComplete="new-password"
              />

              <Eye onClick={handlePwVisible}>
                {visible ? (
                  <AiOutlineEye size={20} />
                ) : (
                  <AiOutlineEyeInvisible size={20} />
                )}
              </Eye>
            </span>
          </PasswordWraper>

          <RegisterBtn type="submit">CREATE ADMIN</RegisterBtn>
        </form>
      </Wraper>
    </RootContainer>
  );
};

export default MakeAdmin;

export const RootContainer = styled(Container)`
  margin-left: 50px;
  margin-top: 20px;

  @media (max-width: 688px) {
    margin-left: 0px;
    height: auto;
  }
`;

const RegisterBtn = styled(SubmitButto)`
  border: 2px solid black;
  background: white;
  color: black;
  transition: all 0.3s;
  margin-bottom: 4rem;

  &:hover {
    color: white;
    background: black;
  }
`;

const PasswordWraper = styled(InputWraper)`
  span {
    width: 100%;
    position: relative;

    input {
      width: 100%;
    }
  }
`;

const Eye = styled.div`
  position: absolute;
  right: 20px;
  top: 29%;
  cursor: pointer;
  // background: red;
  display: flex;
`;
