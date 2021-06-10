import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  border: none;
  font-weight: bold;
  background: #222;
  color: white;
  margin-top: 1.5rem;
  display: inline-block;
  padding: 16px 30px;
  font-size: 1rem;
  border: 1px solid #222;
  transition: all 0.3s;

  &:hover {
    background: none;
    color: #222;
  }
`;

export const FeatureButton = styled.button`
  background: #2b1f4d;
  padding: 10px 20px;
  text-transform: uppercase;
  font-weight: bold;
  border: 2px solid #2b1f4d;
  transition: all 0.3s;
  margin-top: 1.3rem;
  border-radius: 50px;
  font-size: 1rem;
  color: white;
  cursor: pointer;

  &:hover {
    background: none;
    color: #2b1f4d;
  }
`;

export const ProductButton = styled.button`
  display: block;
  width: 100%;
  padding: 12px 0px;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 0.9rem;
  background: #e3e3e37a;
  border: 1px solid black;
  color: black;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: #222222;
    color: white;
  }
`;
