import styled from "styled-components";
import Menu from "./Menu";
import logo from "./../../images/logo.svg";
import useMatchMedia from "use-match-media-hook";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const HeaderContent = styled.header`
  display: flex;
  align-items: center;
  padding: 2rem 2rem !important;

  .logo {
    margin-right: 2rem;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

const menuItems = [
  {
    url: "#",
    text: "Features",
  },
  {
    url: "#",
    text: "Prices",
  },
  {
    url: "#",
    text: "Resources",
  },
];

const queries = ["(min-width: 768px)"];
const Header = () => {
  const [desktop] = useMatchMedia(queries);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <HeaderContent className="container">
      <img src={logo} alt="logo" className="logo" />
      {desktop ? (
        <Menu links={menuItems} />
      ) : (
        <>
          <IoMenu onClick={() => setShowMenu(!showMenu)} style={{cursor: "pointer"}}/>
        </>
      )}
      <AnimatePresence>
        {showMenu && !desktop && <Menu links={menuItems} showMenu={showMenu}/>}
      </AnimatePresence>
    </HeaderContent>
  );
};

export default Header;
