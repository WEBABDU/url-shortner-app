import styled from "styled-components";
import { features } from "./data";

const FeaturesContent = styled.section`
  padding: 6rem 0;
  background-color: #eef0f6;
  text-align: center;
`;

const FeaturesTitle = styled.h2`
  font-size: 2.5rem;
`;

const FeaturesDescription = styled.p`
  color: #bfbfbf;
  margin-bottom: 5rem;
  max-width: 540px;
  margin-left: auto;
  margin-right: auto;
`;

const Featuresitems = styled.div`
  display: flex;
  justify-content: space-between;
  grid-gap: 2rem;
  gap: 2rem;
  align-items: flex-start;

  & article:nth-child(2) {
    margin-top: 3rem;
  }

  & article:nth-child(3) {
    margin-top: 6rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FeaturesItem = styled.article`
  position: relative;
  padding: 4rem 1rem 1.25rem;
  z-index: 2;
  background-color: #fff;
  border-radius: 0.5rem;
  &:not(:last-child)::after {
    content: "";
    position: absolute;
    width: 8px;
    left: unset;
    right: -1.25rem;
    bottom: 30%;
    transform: rotate(90deg);
    height: 2rem;
    display: block;
    background-color: #2acfcf;
    z-index: 2;
  }

  & figure {
    position: absolute;
    z-index: 4;
    left: 2rem;
    top: 0;
    margin: 0;
    transform: translateY(-50%);
    background-color: #3b3054;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    border-radius: 50%;
  }

  @media (max-width: 768px) {
    & figure {
      left: 50%;
      transform: translate(-50%, -50%);
    }

    &:not(:last-child)::after{
      height: 5rem;
      bottom: -5rem;
      left: calc(50% - 4px);
      right: 0;
      transform: rotate(180deg);
    }
  }
`;
const ItemTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 1.5rem;
`;

const ItemDesc = styled.p`
  color: #bfbfbf;
  font-size: 14px;
`;
const Features = () => {
  return (
    <FeaturesContent>
      <div className="container">
        <FeaturesTitle>{features.title}</FeaturesTitle>
        <FeaturesDescription>{features.description}</FeaturesDescription>
        <Featuresitems>
          {features.items.map((item) => (
            <FeaturesItem key={item.id}>
              <figure>
                <img src={item.icon} alt="icon" />
              </figure>
              <ItemTitle>{item.title}</ItemTitle>
              <ItemDesc>{item.body}</ItemDesc>
            </FeaturesItem>
          ))}
        </Featuresitems>
      </div>
    </FeaturesContent>
  );
};

export default Features;
