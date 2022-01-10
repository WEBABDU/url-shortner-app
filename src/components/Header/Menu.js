import styled from "styled-components";
import { Button } from "../Button";

const MenuContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 1s ease-in-out;

  @media (max-width: 768px) {
    position: absolute;
    left: 25%;
    top: 20%;
    flex-direction: column;
    background-color: #3b3054;
    width: 50%;
    padding: 1.25rem;
    border-radius: 1rem;
    height: ${(props) => (props.menu ? "auto" : 0)};
  }
`;

const Pages = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid hsla(0, 0%, 100%, 0.25);
    & a {
      margin-right: 0;
      margin-bottom: 1.25rem;
    }
  }
`;

const Link = styled.a`
  font-size: 14px;
  margin-right: 1.25rem;
  color: #9e9aa7;
  text-decoration: none;
  font-weight: 700;
  &:hover {
    color: #232127;
  }
`;

const Login = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Menu = ({ links, showMenu }) => {
  return (
    <MenuContent menu={showMenu}>
      <Pages>
        {links.map((link) => (
          <Link key={link.text + link.url} href={link.url}>
            {link.text}
          </Link>
        ))}
      </Pages>
      <Login>
        <Button variant="aqua">Login</Button>
        <Button>Sign Up</Button>
      </Login>
    </MenuContent>
  );
};

export default Menu;
