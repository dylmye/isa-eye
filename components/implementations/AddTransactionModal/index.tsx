import AddModal, { AddModalProps } from "@/components/AddModal";
import ThemedText from "@/components/ThemedText";

const AddTransactionModal = (props: AddModalProps) => (
  <AddModal {...props}>
    <AddModal.Header text="Add transaction" onDismiss={props.onDismiss} />
    <ThemedText>Account</ThemedText>
    {/* @TODO support for ledger vs. simple balance accounts */}
    <ThemedText>Amount</ThemedText>
    <ThemedText>Date</ThemedText>
    <ThemedText>Notes</ThemedText>
    <ThemedText>Submit</ThemedText>
  </AddModal>
);

export default AddTransactionModal;
