import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import AuthForm from "./AuthForm";
import { LOGIN } from "../mutations";
import { USER_QUERY } from "./../queries/index";
import { useHistory } from "react-router-dom";

const Signin = () => {
  const history = useHistory();
  const [errors, setErrors] = useState([]);
  const { data, loading, error } = useQuery(USER_QUERY);
  const [login] = useMutation(LOGIN, {
    refetchQueries: [{ query: USER_QUERY }],
  });
  const handleSubmit = (email, password) => {
    login({ variables: { email, password } }).catch((response) => {
      const errors = response.graphQLErrors.map((error) => error.message);
    });
    setErrors(errors);
    history.push("/dashboard");
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return <AuthForm label="Sign-in" onSubmit={handleSubmit} errors={errors} />;
};

export default Signin;
