import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CustomAxios } from "../../http/customAxios";

const Board = () => {
  const navi = useNavigate();
  const goMain = () => {
    navi("/");
  };

  const [test, setTest] = useState<any>("");

  const getData = () => {
    CustomAxios("/test", "GET").then((res) => {
      setTest(res.data);
    });
  };
  console.log(test);

  return (
    <>
      <div>
        <h1>보드</h1>
        <button onClick={() => goMain()}>메인가기</button>
        <button onClick={() => getData()}>테스트 데이터 불러오기</button>
        <div>
          {test &&
            test?.map((el: any, index: number) => {
              return <div key={index}>{el.title}</div>;
            })}
        </div>
      </div>
    </>
  );
};
export default Board;
