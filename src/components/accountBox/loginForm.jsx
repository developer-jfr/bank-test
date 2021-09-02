import React, { useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { loginUsersThunk } from "../../redux/actions/auth-actions";

const INITIAL_FORM_STATE = {
  username: "",
  password: "",
};

const FORM_VALIDATION = Yup.object().shape({
  username: Yup.string().required("Username can not be empty"),

  password: Yup.string().required("Password can not be empty"),
});
export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);

  const dispatch = useDispatch();
  const isAuthorized = useSelector((state) => state.auth?.isLogined);
console.log(isAuthorized)
  if (isAuthorized) {
    return <Redirect to="/" />;
  }

  const submit = (values) => {
    dispatch(loginUsersThunk(values.username, values.password));
  };

  return (
    <BoxContainer>
      <Formik
        initialValues={{
          ...INITIAL_FORM_STATE,
        }}
        validationSchema={FORM_VALIDATION}
        onSubmit={submit}
      >
        <Form>
          <FormContainer>
            <Field name="username" label="Username" as={Input} />

            <Field
              name="password"
              label="Password"
              type="password"
              as={Input}
            />
          </FormContainer>
          <Marginer direction="vertical" margin={10} />
          <MutedLink to="#">Forget your password?</MutedLink>
          <Marginer direction="vertical" margin="1.6em" />
          <SubmitButton htmlType="submit">SignIn</SubmitButton>
          <Marginer direction="vertical" margin="1em" />
          <MutedLink to="#">
            Don't have an accoun?{" "}
            <BoldLink to="#" onClick={switchToSignup}>
              Signup
            </BoldLink>
          </MutedLink>
        </Form>
      </Formik>
    </BoxContainer>
  );
}

