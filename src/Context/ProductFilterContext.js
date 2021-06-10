import { useState, createContext } from "react";
import { ProductFilter } from "../Data/BarData";

export const ProductFilterContext = createContext();

export function ProductFilterContextProvider(props) {
  const [activeItem, setActiveItem] = useState(ProductFilter[0]);

  return (
    <ProductFilterContext.Provider value={[activeItem, setActiveItem]}>
      {props.children}
    </ProductFilterContext.Provider>
  );
}
