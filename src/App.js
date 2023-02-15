import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";

import PhoneSignUp from "./components/PhoneSignUp";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import ChatBox from "./components/ChatBox";

function App() {

   
  return (
    <Container >
    <Row>
      <Col>
        <UserAuthContextProvider>
          <Routes>
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <ChatBox />
                </ProtectedRoute>
              }
            />
            <Route path="/" element={<Login />} />
           
            <Route path="/phonesignup" element={<PhoneSignUp />} />
            <Route path="/phonesignup" element={<Home />} />

          </Routes>
        </UserAuthContextProvider>
      </Col>
    </Row>
  </Container>
  );
  }

export default App;
