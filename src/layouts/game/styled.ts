import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

export const TopBarContainer = styled.div`
  width: 100%;
  height: 80px;
  @media (max-width: 900px) {
    height: 50px;
  }
`;

export const GameContainer = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 900px) {
    padding: 10px;
  }
`;

export const GameGrid = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1400px;
  max-height: 900px;
  display: grid;
  min-height: 600px;
  justify-items: center;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(12, 1fr);
  gap: 20px 40px;
  grid-template-areas:
    "leftBar noteDescription noteDescription clock"
    "leftBar noteDescription noteDescription clock"
    "leftBar noteDescription noteDescription clock"
    "leftBar word word timer"
    "leftBar word word ."
    "leftBar keyboard keyboard clueButton"
    "leftBar keyboard keyboard clueButton"
    "leftBar keyboard keyboard clueButton"
    "leftBar keyboard keyboard ."
    "leftBar keyboard keyboard nextButton"
    "leftBar attempts attempts nextButton"
    "leftBar attempts attempts nextButton";

  @media (max-width: 900px) {
    height: calc(100vh - 50px);
    gap: 0;
    grid-template-areas:
      "clock timer timer timer"
      "leftBar leftBar leftBar leftBar"
      "leftBar leftBar leftBar leftBar"
      "attempts attempts attempts attempts"
      "noteDescription noteDescription noteDescription noteDescription"
      "noteDescription noteDescription noteDescription noteDescription"
      "word word word word"
      "word word word word"
      "keyboard keyboard keyboard keyboard"
      "keyboard keyboard keyboard keyboard"
      "keyboard keyboard keyboard keyboard"
      "clueButton nextButton . .";
  }
`;
