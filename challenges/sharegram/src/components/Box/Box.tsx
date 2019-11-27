import styled from "styled-components";
import {
  background,
  BackgroundProps,
  border,
  BorderProps,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps
} from "styled-system";

export type IBox = BackgroundProps &
  BorderProps &
  ColorProps &
  FlexboxProps &
  LayoutProps &
  PositionProps &
  SpaceProps;

const Box = styled.div<IBox>`
  ${background};
  ${border};
  ${color};
  ${flexbox};
  ${layout};
  ${position};
  ${space};
`;

export default Box;
