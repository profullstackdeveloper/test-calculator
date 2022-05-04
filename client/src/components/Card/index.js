import { style } from "@mui/system";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  min-width: 300px;
  border-radius: 12px;
  box-shadow: 2px 2px 2px rgba(0,0,0,0.3);
  width: fit-content;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
`;
export default function Card({children}) {
  return <Container>{children}</Container>;
}
