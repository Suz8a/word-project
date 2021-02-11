import React from "react";
import Panel from "../../components/panel";
import { colorPalette } from "../../theme";
import { StyledCard } from "./styled";

type ScorePanelProps = {
  score: string;
  words: string;
  letters: string;
  titleSize?: string;
  contentSize?: string;
};

function ScorePanel({
  score,
  words,
  letters,
  titleSize,
  contentSize,
}: ScorePanelProps) {
  return (
    <StyledCard
      width="100%"
      height="100%"
      flexDirection="column"
      justifyContent="start"
      padding="20px;"
    >
      <Panel
        title="Score"
        content={score}
        titleColor={colorPalette.primary}
        contentColor={colorPalette.secondary}
        titleSize={titleSize}
        contentSize={contentSize}
      />
      <Panel
        title="Words"
        content={words}
        titleColor={colorPalette.primary}
        contentColor={colorPalette.secondary}
        titleSize={titleSize}
        contentSize={contentSize}
      />
      <Panel
        title="Letters"
        content={letters}
        titleColor={colorPalette.primary}
        contentColor={colorPalette.secondary}
        titleSize={titleSize}
        contentSize={contentSize}
      />
    </StyledCard>
  );
}

export default ScorePanel;
