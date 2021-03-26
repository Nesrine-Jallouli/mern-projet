import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { userLogin } from "../JS/actions/index";
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap';

const LoginEntreprise = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [role, setRole] = useState()
  const loading = useSelector((state) => state.userReducer.loading);
  const isAuthEnt = useSelector((state) => state.userReducer.isAuthEnt);
  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();
  
  const loginEntreprise = (e) => {
    e.preventDefault();

    dispatch(
     userLogin({
        email,
        password,
      })
    );
  };
  if (user.role==="entreprise") return <Redirect to='/ProfileEntreprise' /> 

  return (
    <div className="container">
     <div className='Login-design text-dark shadow p-3 mb-5 '>
    <Container>
    <Label for="title" className='text-center text-Login'>LOGIN ENTREPRISE</Label>
    <Row>
    <Col>
    <Form id="loginForm" method="post" >
      <FormGroup>
        <Label for="email"> Email</Label>
        <Input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter your Email" required/>
      </FormGroup>
      <FormGroup>
        <Label for="Password"> Password</Label>
        <Input type="password" name="password" id="Password"  onChange={(e) => setPassword(e.target.value)} placeholder="Enter your Password" required/>
        <span id="passwordHelpInline" class="form-text">
      Must be 8-20 characters long.
    </span></FormGroup>
      <Label>Don't have an account?</Label><Link to='/SignUpCompany'> Register</Link>
      <Button className='button_login bg-success' onClick={loginEntreprise}>SIGN IN</Button>
    </Form>
    </Col>
    </Row>
    </Container>
    </div>
      
    </div>
  )
};

export default LoginEntreprise;
