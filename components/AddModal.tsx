import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import type { PropsWithChildren } from "react";
import { Modal, StyleSheet, useColorScheme, View } from "react-native";
import { getCrossPlatformColour } from "@/hooks/getCrossPlatformColour";
import ThemedText from "./ThemedText";

export interface AddModalHeaderProps {
  text?: string;
  onDismiss?: () => void;
}

const AddModalHeader = ({ text, onDismiss }: AddModalHeaderProps) => (
  <View style={styles.modalHeader}>
    <ThemedText type="subtitle">{text}</ThemedText>
    <MaterialCommunityIcons.Button
      name="close"
      onPress={onDismiss}
      aria-label="Close this modal"
      backgroundColor="transparent"
      iconStyle={{
        marginRight: 0,
      }}
      size={20}
    />
  </View>
);

export interface AddModalProps {
  isVisible: boolean;
  onDismiss?: () => void;
  existingId?: string | null;
}

const AddModal = ({
  isVisible,
  onDismiss,
  children,
}: PropsWithChildren<AddModalProps>) => {
  const colourScheme = useColorScheme();

  const schemeStyles =
    colourScheme === "light"
      ? {
          borderColor: "rgba(0, 0, 0, 0.04)",
          borderWidth: 2,
          backgroundColor: getCrossPlatformColour(
            "secondarySystemBackground",
            "@android:color/system_accent1_900",
            "rgb(206, 206, 206)",
          ),
        }
      : {
          backgroundColor: getCrossPlatformColour(
            "secondarySystemBackground",
            "@android:color/system_accent1_900",
            "rgb(39, 39, 39)",
          ),
        };

  return (
    <Modal
      animationType="fade"
      transparent
      visible={isVisible}
      onRequestClose={onDismiss}
      onDismiss={onDismiss}
      presentationStyle="pageSheet"
    >
      <View style={styles.modalBackground}>
        <View style={[schemeStyles, styles.modalCard]}>{children}</View>
      </View>
    </Modal>
  );
};

AddModal.Header = AddModalHeader;

const styles = StyleSheet.create({
  modalBackground: {
    backgroundColor: getCrossPlatformColour(
      "secondarySystemBackground",
      "@android:color/system_accent1_900",
      "rgba(39, 39, 39, 0.65)",
    ),
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalCard: {
    padding: 16,
    borderRadius: 8,
    display: "flex",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    maxWidth: "100%",
    minWidth: "50%",
    maxHeight: "100%",
    overflowY: "auto",
  },
  modalHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default AddModal;
