import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { useHistory } from "react-router-dom";
import AuthForm from "./AuthForm";
import { SIGNUP } from "../mutations";
import { USER_QUERY } from "./../queries/index";

const Signup = () => {
  const history = useHistory();
  const [errors, setErrors] = useState([]);
  const [signup] = useMutation(SIGNUP, {
    refetchQueries: [{ query: USER_QUERY }],
  });
  const handleSubmit = (email, password) => {
    signup({ variables: { email, password } }).catch((response) => {
      const errors = response.graphQLErrors.map((error) => error.message);
    });
    setErrors(errors);
    history.push("/dashboard");
  };

  return <AuthForm label="Sign-up" onSubmit={handleSubmit} errors={errors} />;
};

export default Signup;
