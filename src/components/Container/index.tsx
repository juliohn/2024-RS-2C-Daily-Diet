import { ContainerMaster, Main } from "./styles";
import { Props } from "./types";

export function Container({ children, align = "center" }: Props) {
  return (
    <ContainerMaster>
      <Main align={align}>{children}</Main>
    </ContainerMaster>
  );
}
