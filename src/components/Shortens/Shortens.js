import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Button } from "../Button";

const ShortentsContent = styled.section`
  background-color: #eef0f6;
  padding: 3rem 0 0;
`;
const ShortenItems = styled(motion.div)`
  display: flex;
  grid-gap: 1rem;
  gap: 1rem;
  font-size: 16px;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem;
  background-color: #fff;
  border-radius: 0.5rem;
  margin-top: 0.5rem;

  @media(max-width: 1024px){
    flex-direction: column;
  }
`;
const ShortenItem = styled.span`
  padding: ${(props) => props.padding || 0};
  color: ${(props) => props.color || "#000"};
  margin-right: ${(props) => props.margin || 0};
  
  @media(max-width: 1024px){
    width: 100%;
  }
`;

const Shortens = () => {
  const links = useSelector((state) => state.links.links);
  const [copied, setCopied] = useState(null);

  if (!links.length) {
    return null;
  }

  const copyToClipBoard = (link) => {
    navigator.clipboard.writeText(link).then(() => {
      setCopied(link);
    });
  };

  return (
    <ShortentsContent>
      <div className="container">
        {links.map((link, index) => (
          <AnimatePresence key={index}>
            <ShortenItems
              animate={{
                y: [-200, 0, 0],
                x: 0,
              }}
              transition={{ type: "tween", stiffness: 100, duration: 2 }}
            >
              <ShortenItem margin="auto">{link.original_link}</ShortenItem>
              <ShortenItem color="#2acfcf">{link.short_link}</ShortenItem>
              <Button variant="short" onClick={copyToClipBoard} link={link.short_link} copied={copied}>
                {copied === link.short_link ? "Copied" : "Copy"}
              </Button>
            </ShortenItems>
          </AnimatePresence>
        ))}
      </div>
    </ShortentsContent>
  );
};

export default Shortens;
