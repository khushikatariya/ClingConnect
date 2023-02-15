import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert, CarouselItem } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext";
import Login_phone from "../img/login_phone.png"
import "../App.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import img1 from "../img/image1.png";
import img2 from "../img/image2.png";
import img3 from "../img/image3.png";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
    
    <div className="Container">
    
     <br/>
        <h2 className="heading" align="center">Welcome To Cling Connect</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        
        <hr />
        <h5 align="center">Click. Connect. Chat</h5>
        <Carousel variant="dark" indicators={false}>
        <Carousel.Item>
       <img
        className="car1"
        src={img1}
       /> 
        </Carousel.Item>
        <Carousel.Item>
       <img
        className="car1"
        src={img2}
       /> 
        </Carousel.Item>
        <Carousel.Item>
       <img
        className="car1"
        src={img3}
       /> 
        </Carousel.Item>
        </Carousel>
        <Link to="/phonesignup">
          <div className="d-grid gap-2 mt-3">
          
            <Button variant="success" type="Submit">
              Sign in with Phone
            </Button>
          </div>
        </Link>
      
      
    </div>
    </>
  );
};

export default Login;