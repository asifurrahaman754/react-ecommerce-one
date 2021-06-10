import { useContext } from "react";

import { AiFillStar, AiOutlineStar } from "react-icons/ai";

import { ProductFilter as PF } from "../../Data/BarData";
import ProductBar from "../Resusable/ProductBar";
import * as S from "./ProductFilter";
import { ProductFilterContext } from "../../Context/ProductFilterContext";
import { AlldataFilter } from "../../Data/AllDataFilter";
import {
  ProductImageContainer,
  ProductDes,
  ProductRating,
} from "../lastest Product/Latest";
import { ProductButton } from "../Resusable/Button";

export default function ProductFilter() {
  const [activeItem, setActiveItem] = useContext(ProductFilterContext);

  /* rendering user rating star */
  function renderRating(rating) {
    return Array(rating)
      .fill(" ")
      .map(() => (
        <span>
          <AiFillStar />
        </span>
      ));
  }

  /* rendering remaining outline star */
  function renderOutlineRating(rating) {
    return Array(5 - rating)
      .fill(" ")
      .map(() => (
        <span>
          <AiOutlineStar />
        </span>
      ));
  }

  return (
    <S.ProductFilterSec>
      <ProductBar data={PF} />

      <S.ProductContainer>
        {AlldataFilter.map(item => {
          //filtering product according to the item tag
          if (item.tag.toLowerCase().includes(activeItem.toLowerCase())) {
            return (
              <S.Product key={item.id}>
                <ProductImageContainer>
                  <img src={item.image} alt="product image" />
                </ProductImageContainer>

                <ProductDes>
                  <h3>{item.name}</h3>
                </ProductDes>

                <ProductRating>
                  {renderRating(item.rating)}
                  {renderOutlineRating(item.rating)}
                </ProductRating>

                <span>{item.price}</span>
                <ProductButton>add to cart</ProductButton>
              </S.Product>
            );
          }
        })}
      </S.ProductContainer>
    </S.ProductFilterSec>
  );
}
