import styled from "styled-components";
import { Button } from "../Button";
import boost from "./../../images/bg-boost-desktop.svg";

const CallToActionContent = styled.section`
  background-image: url(${boost});
  padding: 3rem 0;
  background-color: #3b3054;
  background-size: cover;
  background-position: 50%;
  color: #fff;
  text-align: center;
`;

const Title = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
`;

const CallToAction = () => {
  return (
    <CallToActionContent>
      <Title>Boost your links today</Title>
      <Button>Get Started</Button>
    </CallToActionContent>
  );
};

export default CallToAction;
