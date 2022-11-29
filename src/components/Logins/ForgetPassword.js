import React from "react";
import { useEffect } from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import auth from "../../firebase.init";
import {
  Container,
  FormTitle,
  InputLabel,
  InputWraper,
  SubmitButto,
  Wraper,
} from "./Login";

const ForgetPassword = () => {
  // hook form
  const { register, handleSubmit, reset } = useForm();

  // auth
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  //   if error
  useEffect(() => {
    if (error) {
      swal({
        text: `${error?.message}`,
        icon: "warning",
        button: "ok",
        dangerMode: true,
      });
    }
  }, [error]);

  const onSubmit = async(data) => {
    const success = await sendPasswordResetEmail(data.email);

    if(success){
        swal({
            text: `Email Sent Successfully`,
            icon: "success",
            button: "ok",
          });
    }
  };

  return (
    <Container>
      <Wraper>
        <form
          style={{ position: "relative" }}
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* {loading && <LoadingOverlay visible={true} overlayBlur={2} />} */}
          <FormTitle>
            <h2>Forget Password</h2>
          </FormTitle>
          <InputWraper>
            <InputLabel>Email Adress</InputLabel>

            <input
              {...register("email", { required: true })}
              type="email"
              required
            />
          </InputWraper>

          <SubmitButto type="submit">SEND</SubmitButto>
        </form>
      </Wraper>
    </Container>
  );
};

export default ForgetPassword;
