import styled from "styled-components";

const Container = styled.div`
  padding: 25px;
  background-color: gold;
  color: #fff;
  border-radius: 5px;
  width: 450px;
`;

function Total({ children }) {
  return <Container>{children}</Container>;
}

export default Total;
