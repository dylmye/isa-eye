import AddModal, { AddModalProps } from "@/components/AddModal";
import ThemedText from "@/components/ThemedText";

const AddAccountModal = (props: AddModalProps) => (
  <AddModal {...props}>
    <AddModal.Header text="Add account" onDismiss={props.onDismiss} />
    <ThemedText>Bank</ThemedText>
    <ThemedText>Account name (optional)</ThemedText>
    <ThemedText>Opened in TY</ThemedText>
    <ThemedText>Balance type</ThemedText>
    <ThemedText>Starting balance</ThemedText>
    <ThemedText>Submit</ThemedText>
  </AddModal>
);

export default AddAccountModal;
