import { useContext } from "react";
import styled from "styled-components";

import { ProductFilterContext } from "../../Context/ProductFilterContext";

const ProductBarWrap = styled.div`
  width: 100%;
  padding: 15px 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background: #f1f1f1;

  & > * {
    margin: 0px 10px;
  }
`;

const ProductText = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s;
  opacity: ${({ active }) => (active ? "1" : ".6")};
  pointer-events: ${({ disableClick }) => (disableClick ? "none" : "auto")};
  touch-action: ${({ disableClick }) => (disableClick ? "none" : "auto")};

  &:hover {
    opacity: 1;
  }

  & > span {
    display: flex;
    align-items: center;
    margin-right: 10px;
    width: 12px;
    height: 12px;
    border: 1px solid black;
    justify-content: center;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      background: black;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: 1px;
    }
  }
  & > h3 {
    font-weight: 400;
  }
`;

export default function ProductBar({ data }) {
  const [activeItem, setActiveItem] = useContext(ProductFilterContext);

  return (
    <ProductBarWrap>
      {data.map((item, index) => (
        <ProductText
          style={item === "Latest Products" ? { opacity: 1 } : null}
          disableClick={item === "Latest Products" ? true : false}
          key={index}
          onClick={() => setActiveItem(item)}
          active={item === activeItem ? true : false}
        >
          <span></span>
          <h3>{item}</h3>
        </ProductText>
      ))}
    </ProductBarWrap>
  );
}
