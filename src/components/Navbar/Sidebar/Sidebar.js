import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    width: 100%;
    height: 100vh;
    transition: all .3s ease-in-out;
    background: ${({ open }) =>
      open ? "linear-gradient(#00000042,#00000042,#00000042)" : "#fff"};
  }
`;

const Sidebar = styled.div`
  width: 75%;
  height: 100vh;
  position: fixed;
  z-index: 99999;
  top: 0;
  background: #fff;
  left: ${({ open }) => (open ? "0%" : "-101%")};
  transition: all 0.3s ease-in-out;
`;

const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 12px;
  box-shadow: 3px 0px 15px 3px #ddd;
  height: 80px;
`;

const CloseIcon = styled.div`
  font-size: 1.5rem;
  display: flex;
`;

const SidebarMenu = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 20px;
`;

const SidebarMenuItem = styled.a`
  margin-bottom: 35px;
  font-size: 1.2rem;
  color: #777;
`;

export {
  GlobalStyle,
  Sidebar,
  SidebarHeader,
  CloseIcon,
  SidebarMenu,
  SidebarMenuItem,
};
