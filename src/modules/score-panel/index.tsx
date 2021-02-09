import React from "react";
import Panel from "../../components/panel";
import Card from "../../elements/card";
import { colorPalette } from "../../theme";

type ScorePanelProps = {
  score: string;
  words: string;
  letters: string;
};

function ScorePanel({ score, words, letters }: ScorePanelProps) {
  return (
    <Card width="100%" height="100%" flexDirection="column" padding="20px;">
      <Panel
        title="Score"
        content={score}
        titleColor={colorPalette.primary}
        contentColor={colorPalette.secondary}
      />
      <Panel
        title="Words"
        content={words}
        titleColor={colorPalette.primary}
        contentColor={colorPalette.secondary}
      />
      <Panel
        title="Letters"
        content={letters}
        titleColor={colorPalette.primary}
        contentColor={colorPalette.secondary}
      />
    </Card>
  );
}

export default ScorePanel;
