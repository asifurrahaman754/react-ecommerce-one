import { useContext } from "react";

import { FiShoppingBag } from "react-icons/fi";
import { GrMenu } from "react-icons/gr";

import { MenuData } from "../../Data/MenuData";
import * as S from "./Navbar";
import { NavContext } from "../../Context/NavContext";

export default function Navbar() {
  const [isOpen, setIsOpen, toggleMenu] = useContext(NavContext);

  return (
    <S.Header>
      <S.NavbarContainer>
        <S.MobileMenu onClick={toggleMenu}>
          <GrMenu />
        </S.MobileMenu>
        <S.Logo to="/">PHONE</S.Logo>

        <S.Nav>
          {MenuData.map(item => (
            <S.MenuItem href={item.path} key={item.id}>
              {item.name}
            </S.MenuItem>
          ))}
        </S.Nav>

        <S.ShopingCart>
          <FiShoppingBag />
        </S.ShopingCart>
      </S.NavbarContainer>
    </S.Header>
  );
}
