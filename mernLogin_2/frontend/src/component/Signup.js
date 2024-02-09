import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-image: url(https://images.unsplash.com/photo-1705931622854-081e347b18ad?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
  background-size: cover;
  background-position: center;
  animation: ${fadeIn} 1s ease-in-out;
`;

const FormContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 300px;
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 12px;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #4CAF50;
  }
`;

const SubmitButton = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;

const SignupText = styled.h5`
  margin-top: 10px;
  font-size: 14px;
  color: #333;
`;

const StyledLink = styled(Link)`
  color: #4CAF50;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;

  &:hover {
    color: #45a049;
  }
`;

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    re_enter: ""
  });

  const navigate = useNavigate();

  const handlechange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const handlesubmit = () => {
    axios.post("http://localhost:4000/signup", user)
      .then((res) => {
        alert(res.data.message);
        navigate("/home");
        setUser({
          name: "",
          email: "",
          password: "",
          re_enter: ""
        });
      })
      .catch((err) => {
        console.log(err);
        alert("Error during registration");
      });
  };

  return (
    <Container>
      <FormContainer>
        <Input
          type="text"
          name="name"
          placeholder="Enter name..."
          value={user.name}
          onChange={handlechange}
        />
        <Input
          type="email"
          name="email"
          placeholder="Enter email..."
          value={user.email}
          onChange={handlechange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Enter password..."
          value={user.password}
          onChange={handlechange}
        />
        <Input
          type="password"
          name="re_enter"
          placeholder="Re-enter password..."
          value={user.re_enter}
          onChange={handlechange}
        />
        <SubmitButton type="submit" onClick={handlesubmit}>
          Submit
        </SubmitButton>
        <SignupText>
          Already have an account? <StyledLink to="/">Log In</StyledLink>
        </SignupText>
      </FormContainer>
    </Container>
  );
};

export default Signup;
