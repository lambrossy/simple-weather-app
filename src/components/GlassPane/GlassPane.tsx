import styled from "styled-components";

const GlassPane = styled.div({
  display: "inline-block",
  boxShadow: "0 0 15px 0 rgba(0, 0, 0, 0.2)",
  borderRadius: 10,
  backgroundColor: "rgba(255, 255, 255, 0.15)",
  backdropFilter: "blur(5px)",
});

export default GlassPane;
