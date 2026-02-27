import React from "react";
import styled from "styled-components";
import { Divider } from "antd";
import {
  GROOM_NAME,
  GROOM_FATHER_NAME,
  GROOM_MOTHER_NAME,
  BRIDE_NAME,
  BRIDE_FATHER_NAME,
  BRIDE_MOTHER_NAME,
} from "../../config";
import Flower from "../assets/flower1.png";

const Wrapper = styled.div`
  padding-top: 42px;
  margin: 0 auto;
  width: 70%;
`;

const Title = styled.p`
  font-size: 1rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
  text-align: center;
`;

const Content = styled.p`
  font-size: 0.72rem;
  line-height: 1.75;
  opacity: 0.75;
  margin-bottom: 16px;
  width: 100%;
  text-align: center;
`;

const GroomBride = styled.p`
  font-size: 0.875rem;
  line-height: 1.75;
  opacity: 0.85;
  margin-bottom: 0px;
  width: 100%;
  text-align: center;
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 1.375rem;
  padding-bottom: 42px;
`;

const Greeting = () => {
  return (
    <Wrapper>
      <Divider style={{ marginTop: 32, marginBottom: 32 }} plain>
        <Title data-aos="fade-up">저희, 결혼합니다!</Title>
      </Divider>
      <Image data-aos="fade-up" src={Flower} />
      <Content data-aos="fade-up">
        연인으로 함께 맞이한 세 번의 사계절을 지나,
        <br />
        <br /> 
         마침내 부부의 인연을 맺어 평생을 함께하고자 합니다.
        <br />
        <br />
        <br />
        <br />
        최근, 신랑의 해외포닥 결정으로 갑작스럽게
        <br />
        <br />
        신부와 함께 캐나다행이 결정되었습니다.
        <br />
        <br />
        짧은 준비기간으로 인해 많은 분을 모시지
        <br />
        <br />
        못하게 된 점 너른 양해 부탁드립니다.
        <br />
        <br />
        소중한 가족들과 함께 작지만 뜻 깊은
        <br />
        <br />
        언약식으로 첫걸음을 내딛으려 합니다.
        <br />
        <br />
        저희의 앞날을 축복해 주시면 감사하겠습니다.
        <br />
        <br />
      </Content>
      <GroomBride data-aos="fade-up">
        {GROOM_FATHER_NAME} · {GROOM_MOTHER_NAME}의 장남 {GROOM_NAME}
        <br />
        {BRIDE_FATHER_NAME} · {BRIDE_MOTHER_NAME}의 차녀 {BRIDE_NAME}
      </GroomBride>
    </Wrapper>
  );
};

export default Greeting;
