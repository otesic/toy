import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CustomAxios } from "../../http/customAxios";
import Modal from "react-bootstrap/Modal";
import { Button, Container, ModalFooter } from "react-bootstrap";
import { Input } from "reactstrap";
const Main = () => {
  const navi = useNavigate();
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [userId, setUserId] = useState<string>();
  const [userPw, setUserPw] = useState<string>();

  const movePage = (e: string) => {
    navi(e);
  };

  const goLogin = () => {
    CustomAxios("/login", "POST", {
      userId,
      userPw,
    }).then((res) => {
      if (res.data == "성공") {
        alert("hi");
        setModalShow(false);
      } else {
        alert("re try");
      }
    });
  };

  return (
    <>
      <div>
        <h1>메인</h1>
        <button onClick={() => movePage("/board")}>게시판</button>
        <button onClick={() => setModalShow(true)}>로그인</button>
        <button onClick={() => movePage("/rtc")}>알티씨</button>
        <button onClick={() => movePage("/test")}>테스트</button>

        {modalShow && (
          <Modal
            show={modalShow}
            onHide={() => setModalShow(false)}
            aria-labelledby="contained-modal-title-vcenter"
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                로그인하시겠습니까?
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
              <button>카카오</button>
              <button>구글</button>
              <button>네이버</button>
              <Button onClick={goLogin}>로그인</Button>
            </ModalFooter>
          </Modal>
        )}
      </div>
    </>
  );
};

export default Main;
