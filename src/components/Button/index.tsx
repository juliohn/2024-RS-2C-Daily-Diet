import { Container, Title, ContainerIcon } from "./styles";
import { ButtonProps } from "./types";

export function Button({
  title,
  onPress,
  icon,
  type = "PRIMARY",
  ...rest
}: ButtonProps) {
  return (
    <Container type={type} {...rest}>
      {icon && <ContainerIcon>{icon}</ContainerIcon>}
      <Title type={type}>{title}</Title>
    </Container>
  );
}
