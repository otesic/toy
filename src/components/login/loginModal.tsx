import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import { Input, ModalFooter } from "reactstrap";
import { CustomAxios } from "../../http/customAxios";

const LoginModal = (props: any) => {
  const [userId, setUserId] = useState<string>();
  const [userPw, setUserPw] = useState<string>();
  const goLogin = () => {
    CustomAxios("/login", "POST", {
      userId,
      userPw,
    }).then((res) => {
      if (res.data == "성공") {
        alert("hi");
        console.log(show);
      } else {
        alert("re try");
      }
    });
  };
  const [show, setShow] = useState(true);
  // const handleClose = () => setShow(true);
  return (
    <Modal show={show} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Using Grid in Modal
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          아이디
          <Input onChange={(e) => setUserId(e.target.value)}></Input>
          비번
          <Input onChange={(e) => setUserPw(e.target.value)}></Input>
        </Container>
      </Modal.Body>
      <ModalFooter>
        <Button onClick={goLogin}>로그인</Button>
      </ModalFooter>
    </Modal>
  );
};

export default LoginModal;
