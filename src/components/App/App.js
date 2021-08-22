import { memo } from "react";
import styled from "styled-components";
import Grid from "../Grid/Grid";
import CityTile from "../CityTile/CityTile";
import useCities from "../../hooks/useCities";

const Container = styled.div({
  height: "100%",
  margin: "0 auto",
  maxWidth: 1200,
  minWidth: 600,
  display: "table",
  verticalAlign: "middle",
  color: "#48484a",
  fontFamily: '"Georama", sans-serif',
});

const Center = styled.div({
  display: "table-cell",
  verticalAlign: "middle",
});

const Message = styled.div({
  fontSize: 48,
  textAlign: "center",
});

const App = ({ dependencies }) => {
  const { cities, error, loading } = useCities(dependencies);

  return (
    <Container>
      <Center>
        {loading && <Message>Loading</Message>}
        {error && <Message>Whoops, something went wrong!</Message>}
        {cities && (
          <Grid>
            {cities.map((city) => (
              <CityTile key={city.id} {...city} />
            ))}
          </Grid>
        )}
      </Center>
    </Container>
  );
};

export default memo(App);
