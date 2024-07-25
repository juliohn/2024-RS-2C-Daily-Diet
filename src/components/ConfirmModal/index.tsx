import { Button } from "@components/Button";
import { Modal } from "react-native";

interface ConfirmModalProps {
  textConfirm: string;
  visible: boolean;
  textButonCancel: string;
  textButtonConfirm: string;
  callBackConfirm: () => void;
  callBackCancel: () => void;
}

import { TextConfirm, BoxContainer, Box, BoxAction, BoxButton } from "./styles";

export function ConfirmModal({
  textConfirm,
  visible,
  textButonCancel,
  textButtonConfirm,
  callBackConfirm,
  callBackCancel,
}: ConfirmModalProps) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        callBackCancel();
      }}
    >
      <BoxContainer>
        <Box>
          <TextConfirm>{textConfirm}</TextConfirm>

          <BoxAction>
            <BoxButton>
              <Button
                type="SECONDARY"
                title={textButonCancel}
                onPress={callBackCancel}
              />
            </BoxButton>
            <BoxButton>
              <Button title={textButtonConfirm} onPress={callBackConfirm} />
            </BoxButton>
          </BoxAction>
        </Box>
      </BoxContainer>
    </Modal>
  );
}
