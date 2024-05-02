import React from "react";

import styled from "@emotion/styled";

const IconDescription = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 12px;
  padding: 1rem 0 0;
  border-radius: 8px;
  opacity: 0.5;
`;

const IconTextRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
`;

const Icon = styled.img`
  width: 16px;
`;

const IconText = styled.p`
  margin: 0;
  font-size: 0.8rem;
`;

function IconsDescription() {
  return (
    <IconDescription>
      <IconTextRow>
        <Icon src="public/continent.svg" />
        <IconText>= Continent</IconText>
      </IconTextRow>
      <IconTextRow>
        <Icon src="public/capital.svg" />
        <IconText>= Capital</IconText>
      </IconTextRow>
      <IconTextRow>
        <Icon src="public/population.svg" />
        <IconText>= Population</IconText>
      </IconTextRow>
      <IconTextRow>
        <Icon src="public/language.svg" />
        <IconText>= Language(s)</IconText>
      </IconTextRow>
    </IconDescription>
  );
}

export default IconsDescription;
