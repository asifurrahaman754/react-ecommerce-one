import styled from "styled-components";

const ProductDetailsContainer = styled.section`
  max-width: 1200px;
  margin: 80px auto 50px auto;
  padding: 0px 40px;
`;

const ProductDContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  grid-gap: 1.9rem;

  @media (max-width: 500px) {
    display: block;
  }
`;

const ProductVisitonWrapper = styled.div``;

const ProductImageWrapper = styled.div`
  display: flex;

  @media (max-width: 1020px) {
    flex-direction: column-reverse;
  }
`;

const ProductImageShowCase = styled.div`
  width: 80px;

  & > img {
    width: 100%;
    border-top: 1px solid #0000003b;
    padding: 11px;
    margin-bottom: -7px;
    border-left: 1px solid #0000003b;

    &:last-child {
      border-bottom: 1px solid #0000003b;
    }
  }

  @media (max-width: 1020px) {
    display: flex;
    width: auto;
    max-width: 400px;

    & > img {
      border-bottom: 1px solid #0000003b;
      border-top: none;

      &:last-child {
        border-right: 1px solid #0000003b;
      }
    }
  }
`;

const ProductImageBig = styled.div`
  width: 100%;
  padding: 20px 50px;
  border: 1px solid #0000003b;
  text-align: center;

  & > img {
    max-width: 100%;
  }
`;

const ProductButtons = styled.div`
  display: flex;
  margin: 30px 0px;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;

  & > button {
    border: 1px solid black;
    background: white;
    font-size: 1.1rem;
    text-transform: uppercase;
    max-width: 260px;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s;
    color: #000000d4;

    &:hover {
      background-color: #2d2d2d;
      color: whitesmoke;
    }

    & > span {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 10px;
    }
  }
`;

const ProductDetailsText = styled.div`
  & > h1 {
    font-weight: 400;
  }
  & > p {
    color: #000000bf;
    font-size: 15px;
    margin: 20px 0px;
  }

  & > span {
    color: red;
    font-size: 1.2rem;
    margin: 10px 0px 0px 0px;
    display: block;
    margin-top: 10px;
  }
`;

const ProductRating = styled.div`
  color: orange;
  font-size: 1.1rem;
  border-bottom: 1px solid #0000003b;
  padding-bottom: 20px;
`;

const ProductSelect = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ProductType = styled.div`
  margin-bottom: 20px;

  & > span {
    margin-right: 10px;
  }

  & > select {
    background: 0 0;
    width: 15rem;
    border: none;
    padding: 0.5rem 1rem;
    border-bottom: 1px solid #dadada;
  }
`;

const ProductQuantity = styled.div`
  display: flex;
  align-items: center;

  & > span {
    margin-right: 20px;
  }
`;

const QuantityButtons = styled.div`
  display: flex;

  & > span {
    display: grid;
    place-items: center;
  }

  & * {
    font-size: 1.2rem;
    border-top: 1px solid #0000003b;
    width: 35px;
    height: 35px;
    border-left: 1px solid #0000003b;
    border-bottom: 1px solid #0000003b;
  }

  &:last-child {
    border-right: 1px solid #0000003b;
  }
`;

export {
  ProductDetailsContainer,
  ProductDContentWrapper,
  ProductVisitonWrapper,
  ProductImageWrapper,
  ProductImageShowCase,
  ProductImageBig,
  ProductButtons,
  ProductDetailsText,
  ProductRating,
  ProductSelect,
  ProductType,
  ProductQuantity,
  QuantityButtons,
};
