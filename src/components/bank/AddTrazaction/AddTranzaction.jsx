import React from "react";
import styled from "styled-components";
import Input from "./Input";
import { Field, Form, Formik } from "formik";

import { useDispatch, useSelector } from "react-redux";
import { createTranzaction } from "../../../redux/actions/bank-action";
import { Redirect } from "react-router-dom";
const usersSearchFormValidate = (values) => {
  const errors = {};
  return errors;
};
const AddTrans = () => {
  const dispatch = useDispatch();
  const isLogined = useSelector((state) => state.auth.isLogined);
  if (!isLogined) {
    return <Redirect to="/auth" />;
  }
  const submit = (values, { setSubmitting }) => {
    console.log(values);
    dispatch(createTranzaction(values.id, values.amount, values.bankName));

    setSubmitting(false);
  };
  return (
    <Container>
      <Formik
        enableReinitialize
        initialValues={{
          id: (Math.random() * 1).toString(),
          amount: 0,
          bankName: "",
        }}
        validate={usersSearchFormValidate}
        onSubmit={submit}
      >
        {({ isSubmitting, values, setFieldValue }) => (
          <Form>
            <LogoWrapper>
              <h3>
                Create <span>Tranzaction</span>
              </h3>
            </LogoWrapper>
            <FormStyled>
              <Field type="text" name="bankName" as={StyledInput} />
              <Field type="number" name="amount" as={StyledInput} />

              <button type="submit" disabled={isSubmitting}>
                Create
              </button>
            </FormStyled>
          </Form>
        )}
      </Formik>
    </Container>
  );
};


const StyledInput = styled.input`
  width: 80%;
  max-width: 350px;
  min-width: 250px;
  height: 40px;
  border: none;
  margin: 0.5rem 0;
  background-color: #f5f5f5;
  box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 0 1rem;
  transition: all 0.2s ease-in;

  &:hover {
    transform: translateY(-3px);
  }
  &:focus {
    outline: none;
  }
`;

const Terms = styled.p`
  padding: 0 1rem;
  text-align: center;
  font-size: 10px;
  color: #808080;
  font-weight: 300;
`;

const FormStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    color: #666666;
    margin-bottom: 2rem;
  }

  button {
    width: 75%;
    max-width: 350px;
    min-width: 250px;
    height: 40px;
    border: none;
    margin: 1rem 0;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    background-color: #70edb9;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in;

    &:hover {
      transform: translateY(-3px);
    }
  }
`;

const LogoWrapper = styled.div`
  img {
    height: 6rem;
  }

  h3 {
    color: #000;
    text-align: center;
    font-size: 22px;
  }

  span {
    color: #5dc399;
    font-weight: 300;
    font-size: 18px;
  }
`;

const Container = styled.div`
  min-width: 400px;
  backdrop-filter: blur(35px);
  background-color: rgba(255, 255, 255, 0.8);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 20vh 2rem;

  

  h4 {
    color: #808080;
    font-weight: bold;
    font-size: 13px;
    margin-top: 2rem;

    span {
      color: #ff8d8d;
      cursor: pointer;
    }
  }
`;

export default AddTrans;
