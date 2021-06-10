import styled from "styled-components";

const FeatureContainer = styled.section`
  margin: 60px 0px;
`;

const CardContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0px 40px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  grid-gap: 1rem;

  @media (max-width: 500px) {
    display: block;
  }
`;

const Card = styled.div`
  background-color: #f1f1f1;
  padding: 15px 25px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 6px;

  @media (max-width: 500px) {
    &:first-child {
      margin-bottom: 30px;
    }
  }
`;

const ImageContainer = styled.div`
  max-width: 130px;
  margin-right: 50px;

  & > img {
    width: 100%;
  }
`;
const CardContent = styled.div`
  text-align: center;

  & > h3 {
    font-size: 1.5rem;
  }

  & > span {
    font-size: 15px;
  }
`;

export { FeatureContainer, Card, ImageContainer, CardContainer, CardContent };
