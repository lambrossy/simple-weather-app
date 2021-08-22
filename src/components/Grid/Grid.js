import styled from "styled-components";

const Container = styled.div({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
});

const Cell = styled.div({
  margin: 10,
});

const Grid = ({ children }) => (
  <Container>
    {children.map((cell) => (
      <Cell key={cell.key}>{cell}</Cell>
    ))}
  </Container>
);

export default Grid;
