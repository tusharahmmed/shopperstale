import React, { useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import auth from "../../firebase.init";
import { LoadingOverlay } from "@mantine/core";

const Login = () => {
  // auth
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [currentUser] = useAuthState(auth);
  // use form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  let history = useHistory();

  // if already loged in
  if (currentUser) {
    history.push("/");
  }

  // handle form submission
  const onSubmit = (data) => {
    const { password } = data;

    // validate
    if (password.length > 7) {
      // sign in method
      signInWithEmailAndPassword(data?.email, password);
    } else {
      swal("Password must be at least 8 characters");
    }
  };

  // login response

  useEffect(() => {
    // if error
    if (error) {
      swal({
        text: `${error?.message}`,
        icon: "warning",
        button: "ok",
        dangerMode: true,
      });
    }
    // if successfull
    if (user) {
      reset();
      history.replace(from);
    }
  }, [error, user]);

  return (
    <Container>
      <Wraper>
        <form
          style={{ position: "relative" }}
          onSubmit={handleSubmit(onSubmit)}
        >
          {loading && <LoadingOverlay visible={true} overlayBlur={2} />}
          <FormTitle>
            <h2>Sign In</h2>
          </FormTitle>
          <InputWraper>
            <InputLabel>Email Adress</InputLabel>

            <input
              {...register("email", { required: true })}
              type="email"
              required
            />
          </InputWraper>
          <InputWraper>
            <InputLabel>Password</InputLabel>
            <input
              {...register("password", { required: true })}
              type="password"
              required
            />
          </InputWraper>
          <SubmitButto type="submit">SIGN IN</SubmitButto>
        </form>
        <ForgetPw>Forget Password? <Link to="/login/reset">Click Here</Link></ForgetPw>
        {/* <OR> */}
          {/* <span></span> */}
          {/* <p>OR</p> */}
          {/* <span></span> */}
        {/* </OR> */}
        {/* <Link to="/register">
          <Register>CREAT NEW ACCOUNT</Register>
        </Link> */}
      </Wraper>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  font-family: g-ssm;
  height: 100vh;
`;
const LoginHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  height: 54px;
  font-size: 18px;

  span {
    margin-top: 2px;
  }

  div {
    a {
      font-size: 14px;
      text-decoration: none;
    }
  }
`;
const Form = styled.form``;
const FormTitle = styled.div`
  padding: 32px 0px 8px;
  margin-bottom: 16px;

  color: #181b21;

  h2 {
    font-size: 32px;
    font-weight: 500;
  }
`;
const InputWraper = styled.div`
  font-size: 14px;
  color: #5c5d61;
  display: flex;
  flex-direction: column;
  margin: 0.6rem 0rem;
  input {
    margin: 4px 0px;
    height: 38px;
    border: none;
    background: #f5f5f5;
    border-radius: 999px;
    padding: 0px 20px;
    font-size: 14px;
    font-weight: 800px;

    &:focus {
      outline: 1px solid gray;
    }
  }
`;

const InputSelect = styled.select`
  margin: 4px 0px;
  height: 38px;
  border: none;
  background: #f5f5f5;
  border-radius: 999px;
  padding: 0px 20px;
  font-size: 14px;
  font-weight: 800px;
  padding-right: 40px;

  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1em;

  option {
    padding: 50px 10px;
    min-height: 60px;
  }

  &:focus {
    border-radius: 4px;
    outline: 1px solid gray;
  }
`;
const InputLabel = styled.label`
  margin: 10px 20px 5px;
`;
const SubmitButto = styled.button`
  width: 100%;
  height: 38px;
  background: #3d69e1;
  text-align: center;
  color: white;
  border: none;
  font-size: 12px;
  font-weight: 600;
  border-radius: 999px;
  margin-top: 10px;
  cursor: pointer;
`;

const OR = styled.div`
  margin: 40px 0px;
  p {
    text-align: center;
  }
`;
const Wraper = styled.div`
  margin: 0 auto;
  width: 332px;
`;
const Register = styled(SubmitButto)`
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

const ForgetPw = styled.p`
font-size: 12px;
text-align: right;
margin-top: 10px;

a{
  font-size: 14px;
}
`;

export {
  Container,
  LoginHeader,
  FormTitle,
  InputWraper,
  InputLabel,
  InputSelect,
  SubmitButto,
  OR,
  Wraper,
  Register,
};
