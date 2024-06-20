import { TouchableOpacityProps } from "react-native";

// - Button Props Style
export type ButtonTypeStylesProps = "PRIMARY" | "SECONDARY";

export interface ButtonProps extends TouchableOpacityProps {
  title: string;
  onPress: () => void;
  icon?: React.JSX.Element;
  type?: ButtonTypeStylesProps;
}
