import styled from "styled-components";

const FooterSection = styled.section`
  background-color: #252525;
  color: white;
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  padding: 50px 40px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1rem;
  justify-content: space-between;
  margin: 0 auto;
`;

const FooterCol = styled.div`
  display: flex;
  flex-direction: column;

  & > h3 {
    font-weight: 500;
    margin-bottom: 12px;
  }

  & > a,
  p {
    color: #ffffffa1;
    font-size: 0.9rem;
    margin-bottom: 8px;
    transition: all 0.2s;
  }

  & > a:hover {
    color: white;
  }

  & > p {
    display: flex;
    align-items: center;

    & > span {
      color: white;
      font-size: 1rem;
      margin-right: 10px;
      display: flex;
    }
  }
`;

export { FooterSection, FooterContainer, FooterCol };
