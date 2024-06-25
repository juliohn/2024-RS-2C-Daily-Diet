import { ContainerMaster } from "./styles";
import { Props } from "./types";

export function Container({ children, align = "center" }: Props) {
  return <ContainerMaster align={align}>{children}</ContainerMaster>;
}
