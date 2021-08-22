import { FC } from "react";
import styled from "styled-components";

const Container = styled.div({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
});

const Cell = styled.div({
  margin: 10,
});

interface Props {
  children: JSX.Element[];
}

const Grid: FC<Props> = ({ children }) => (
  <Container>
    {children.map((cell: JSX.Element) => (
      <Cell key={cell.key}>{cell}</Cell>
    ))}
  </Container>
);

export default Grid;
