import styled from "styled-components";
import { Button } from "../Button";
import heroimg from "./../../images/illustrationWorking.svg";

const HeroContent = styled.section`
  display: flex;
  align-items: center;
  padding-top: 2rem;
  grid-gap: 1rem;
  gap: 1rem;
  padding-bottom: 2rem !important;

  @media(max-width: 768px){
    flex-wrap: wrap-reverse;
  }
`;
const TextContent = styled.article`
  width: 50%;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media(max-width: 768px){
    text-align: center;
    flex-shrink: 0;
    width: 100%;
    align-items: center;
  }
`;
const HeroTitle = styled.h1`
  font-size: 3.25rem;
  line-height: 1.25;
  margin-top: 0;
  margin-bottom: 0.75rem;
`;

const HeroDescription = styled.p`
  color: #bfbfbf;
  margin-bottom: 1.25rem;
`;

const Image = styled.img`
  width: 120%;

  @media(max-width: 1024px){
    width: 100%;
  }
  /* @media(max-width: 768px){
    width: 150%;
    flex-grow: 0;
  } */
`;

const ImageContent =styled.div`
 width: 50%;
 @media(max-width: 768px){
    width: 100%;
    flex-grow: 0;
  }
 
`

const Hero = () => {
  return (
    <HeroContent className="container">
      <TextContent>
        <HeroTitle>More than just shorter links</HeroTitle>
        <HeroDescription>
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </HeroDescription>
        <Button>Get Started</Button>
      </TextContent>
      <ImageContent>
        <Image src={heroimg} alt="working" />
      </ImageContent>
    </HeroContent>
  );
};

export default Hero;
