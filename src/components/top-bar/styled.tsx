import styled from "styled-components";
import Text from "../../elements/text";

type TopBarContainerProps = {
  height: string;
  backgroundColor: string;
};

export const TopBarContainer = styled.div<TopBarContainerProps>`
  ${({ height, backgroundColor }) =>
    "".concat(`height:${height};`, `background-color:${backgroundColor};`)}
  display: flex;
  position: relative;
  width: 100%;
  padding: 10px 10px 10px 30px;
`;

export const StyledText = styled(Text)`
  width: 100%;
  text-align: center;
`;
