import { memo, FC } from "react";
import GlassPane from "../GlassPane/GlassPane";
import styled from "styled-components";
import round from "lodash/fp/round";
import upperFirst from "lodash/fp/upperFirst";

import CityWeather from "../../types/CityWeather";

const Container = styled.div({
  width: 240,
  height: 240,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: 15,
  fontFamily: '"Georama", sans-serif',
});

const CityName = styled.h2({
  margin: 0,
  fontSize: 30,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

const Temperature = styled.div({
  fontSize: 60,
});

const Conditions = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const Image = styled.img({
  margin: "-20px -10px",
});

const Description = styled.h2({
  margin: 0,
  fontSize: 24,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

const TemperatureRange = styled.div({
  display: "flex",
  justifyContent: "space-between",
  fontSize: 24,
});

const CityTile: FC<CityWeather> = ({
  name,
  icon,
  temperature,
  description,
}) => (
  <GlassPane>
    <Container>
      <CityName>{name}</CityName>
      <Conditions>
        <Temperature>{round(temperature.current)}°</Temperature>
        <Image alt={icon.description} src={icon.url} />
      </Conditions>
      <Description>{upperFirst(description)}</Description>
      <TemperatureRange>
        <div>Low: {round(temperature.min)}°</div>
        <div>High: {round(temperature.max)}°</div>
      </TemperatureRange>
    </Container>
  </GlassPane>
);

export default memo(CityTile);
