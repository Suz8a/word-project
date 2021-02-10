import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

export const TopBarContainer = styled.div`
  width: 100%;
  height: 80px;
`;

export const GameContainer = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  padding: 30px;
`;

export const GameGrid = styled.div`
  width: 100%;
  height: 100%;
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
`;
