import { useEffect, useContext } from "react";

import { GrClose } from "react-icons/gr";

import { Logo } from "../Navbar";
import { MenuData } from "../../../Data/MenuData";
import * as S from "./Sidebar";
import { NavContext } from "../../../Context/NavContext";

export default function Sidebar() {
  const [isOpen, setIsOpen, toggleMenu] = useContext(NavContext);

  useEffect(() => {
    if (isOpen) {
      document.body.addEventListener("click", toggleMenu);
    }
    return () => {
      document.body.removeEventListener("click", toggleMenu);
    };
  }, [isOpen]);

  return (
    <S.Sidebar open={isOpen}>
      <S.GlobalStyle open={isOpen} />
      <S.SidebarHeader>
        <Logo href="/">PHONE</Logo>

        <S.CloseIcon onClick={toggleMenu}>
          <GrClose />
        </S.CloseIcon>
      </S.SidebarHeader>

      <S.SidebarMenu>
        {MenuData.map(item => (
          <S.SidebarMenuItem href={item.path} key={item.id}>
            {item.name}
          </S.SidebarMenuItem>
        ))}
      </S.SidebarMenu>
    </S.Sidebar>
  );
}
