import { View } from "react-native";
import styled from "styled-components/native";
import { theme } from "../../infrastructure/theme"

const TopSmall = styled(View)`
  margin-top: 4px;
`;

const TopMedium = styled(View)`
  margin-top: 8px;
`;

const TopLarge = styled(View)`
  margin-top: 16px;
`;

const LeftSmall = styled(View)`
  margin-left: 4px;
`;

const LeftMedium = styled(View)`
  margin-left: 8px;
`;

const LeftLarge = styled(View)`
  margin-left: 16px;
`;

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant = {
  top: "marginTop",
  left: "marginLeft",
  right: "marginRight",
  bottom: "marginBottom",
};

const getVariant = (position, size, theme) => {
  const sizeIndex = sizeVariant[size];
  const property = positionVariant[position];
  const value = theme.space[sizeIndex];

  `${property}:${value}`;
}

export const Spacer = styled.View`
  ${({ position, size }) => getVariant(position, size, theme)}
`;

Spacer.defaultProps = {
  position: "top",
  size: "small",
};
