import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = styled.header`
  width: 100%;
  height: 80px;
  box-shadow: 3px 0px 15px 3px #ddd;
  position: sticky;
  top: 0;
  z-index: 999;
  background: #fff;
`;

const NavbarContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  height: inherit;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 40px;
`;

const Logo = styled(Link)`
  font-size: 2rem;
  color: black;
  font-family: Arial;
  font-weight: bold;
`;

const MobileMenu = styled.div`
  display: none;

  @media (max-width: 600px) {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
  }
`;

const Nav = styled.div`
  display: flex;

  @media (max-width: 600px) {
    display: none;
  }
`;

const MenuItem = styled.a`
  margin-left: 20px;
  color: black;
`;

const ShopingCart = styled.div`
  font-size: 1.5rem;
`;

export {
  Header,
  NavbarContainer,
  Logo,
  MobileMenu,
  Nav,
  MenuItem,
  ShopingCart,
};
