import React, { useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Link, Redirect } from "react-router-dom";

import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

import { useDispatch, useSelector } from "react-redux";
import { createUsersThunk } from "../../redux/actions/auth-actions";
const INITIAL_FORM_STATE = {
  username: "",
  email: "",
  password: "",
};

const FORM_VALIDATION = Yup.object().shape({
  username: Yup.string().required("Username can not be empty"),
  email: Yup.string().required("Email can not be empty"),
  password: Yup.string().required("Password can not be empty"),
});

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);
  const dispatch = useDispatch();
  const isAuthorized = useSelector((state) => state.auth?.isAuthorized);

  if (isAuthorized) {
    return <Redirect to="/signin" />;
  }

  const submit = (values) => {
    dispatch(createUsersThunk(values.username, values.email, values.password));
  };
  return (
    <div>
    
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

            <Field name="email" label="Email" as={Input} />

            <Field
              name="password"
              label="Password"
              type="password"
              as={Input}
            />
          </FormContainer>
          <Marginer direction="vertical" margin={10} />

          <SubmitButton type="submit">Signup</SubmitButton>
          <Marginer direction="vertical" margin="1em" />
          <MutedLink to="#">
            Already have an account?
            <BoldLink to="#" onClick={switchToSignin}>
              Signin
            </BoldLink>
          </MutedLink>
        </Form>
      </Formik>
    </BoxContainer>
    </div>
  );
}

