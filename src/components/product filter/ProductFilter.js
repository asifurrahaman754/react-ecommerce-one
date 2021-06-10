import styled from "styled-components";

const ProductFilterSec = styled.section`
  max-width: 1200px;
  padding: 0px 40px;
  margin: 50px auto 100px auto;
`;

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 2.5rem;
  margin-top: 4rem;
`;

const Product = styled.div`
  text-align: center;
`;

export { ProductFilterSec, ProductContainer, Product };
