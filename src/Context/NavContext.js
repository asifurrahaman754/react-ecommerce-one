import { useState, createContext } from "react";

export const NavContext = createContext();

export function NavContextProvider(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavContext.Provider value={[isOpen, setIsOpen, toggleMenu]}>
      {props.children}
    </NavContext.Provider>
  );
}
