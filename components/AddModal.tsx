import { PropsWithChildren } from "react";
import { Modal } from "react-native";

interface AddModalProps {
  isVisible: boolean;
  onDismiss?: () => void;
}

const AddModal = ({
  isVisible,
  onDismiss,
  children,
}: PropsWithChildren<AddModalProps>) => (
  <Modal
    animationType="fade"
    transparent
    visible={isVisible}
    onRequestClose={onDismiss}
    onDismiss={onDismiss}
    presentationStyle="pageSheet"
  >
    {children}
  </Modal>
);

export default AddModal;
