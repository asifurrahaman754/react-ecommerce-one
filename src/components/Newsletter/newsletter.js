import styled from "styled-components";

const NewsletterSection = styled.section`
  border-top: 1px solid #ddd;
`;

const NewsletterContainer = styled.div`
  max-width: 1200px;
  padding: 50px 40px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`;

const NewsletterContent = styled.div`
  & > h1 {
    font-weight: 400;
  }

  & > p {
    color: #000000ba;
  }

  @media (max-width: 1160px) {
    text-align: center;
    margin: 0 auto 20px auto;
  }
`;

const NewsletterInput = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;

  & > input {
    width: 25rem;
    padding: 13px;
    font-size: 1rem;
    background: #f1f1f1;
    border: 1px solid #ddd;
  }

  & > button {
    font-size: 1rem;
    background: #000;
    border: 1px solid #000;
    color: white;
    padding: 13px 25px;
    cursor: pointer;
  }

  @media (max-width: 1160px) {
    margin: 0 auto;
    width: 100%;
  }
`;

export {
  NewsletterSection,
  NewsletterContainer,
  NewsletterContent,
  NewsletterInput,
};
