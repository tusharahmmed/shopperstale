// @packages
import React, { useState } from "react";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

// @components
import {
  Container,
  InputLabel,
  InputWraper,
  OR,
  SubmitButto,
  Wraper,
} from "../../Logins/Login";

const MakeAdmin = () => {
  // state
  const [visible, setVisible] = useState(false);

  const handlePwVisible = () => {
    setVisible((visible) => !visible);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

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

      // after validation



    } else {
      swal("Password must be at least 8 characters");
    }

    console.log(data.password.match(/[A-Z]/));
    console.log(data.password.match(/[a-z]/));
    console.log(data.password.match(/[0-9]/));
    console.log(data.password.match(/[!@#$%^&*)(_:",.]/));

    return;

    // alert for confimation
    swal({
      title: "Are you sure?",
      text: "Once created, all access will given to him!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((makeAdmin) => {
      // if (makeAdmin) {
      //     // send data to backend
      //     fetch('https://damp-bayou-69353.herokuapp.com/create-new-admin', {
      //         method: 'POST',
      //         headers: {
      //             'Content-Type': 'application/json'
      //         },
      //         body: JSON.stringify(data)
      //     })
      //         .then(res => res.json())
      //         .then(success => {
      //             // if updated
      //             if (success.modifiedCount) {
      //                 // confirmation alert
      //                 swal("Poof! You have successfully created new admin!.", {
      //                     icon: "success",
      //                     buttons: false,
      //                     timer: 1000
      //                 });
      //                 // reset form
      //                 reset();
      //             }
      //         })
      // } else {
      //     // if admin cancel promp
      //     swal("Your website is safe!", {
      //         buttons: false,
      //         timer: 1000
      //     });
      // }
    });
  };

  return (
    <RootContainer>
      <Wraper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputWraper>
            <InputLabel>Name</InputLabel>
            <input {...register("name", { required: true })} type="text" />
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
