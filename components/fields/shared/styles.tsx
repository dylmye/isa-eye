import { fontFamily } from "@/constants/fontFamily";
import { getCrossPlatformColour } from "@/hooks/getCrossPlatformColour";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  field: {
    backgroundColor: getCrossPlatformColour(
      "secondarySystemBackground",
      "@android:color/system_accent1_900",
      "rgba(255, 255, 255, 0.15)"
    ) as string,
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginBottom: 6,
    fontSize: 16,
    borderWidth: 0,
    flex: 1,
  },
  fieldWithAdornments: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    lineHeight: 24,
  },
  fieldPrefix: {
    paddingRight: 8,
  },
  fieldSuffix: {
    paddingLeft: 8,
  },
  fieldAdornmentText: {
    fontWeight: "600",
    fontSize: 16,
  },
  label: {
    marginBottom: 4,
  },
  labelText: {
    fontWeight: "600",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    paddingVertical: 6,
  },
  submit: {
    marginTop: 12,
  },
  messageShared: {
    padding: 6,
    borderRadius: 4,
    marginBottom: 8,
    maxWidth: 600,
  },
  messageTextShared: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    lineHeight: 18,
  },
  validationMessage: {
    backgroundColor: getCrossPlatformColour(
      "systemRed",
      "system_error_200",
      "rgb(255, 151, 151)"
    ),
  },
  validationMessageText: {
    color: getCrossPlatformColour(
      "systemRed",
      "system_error_900",
      "rgb(223, 0, 0)"
    ),
  },
  infoMessage: {
    backgroundColor: getCrossPlatformColour(
      "systemBlue",
      "system_neutral2_200",
      "rgb(151, 222, 255)"
    ),
  },
  infoMessageText: {
    color: getCrossPlatformColour(
      "systemBlue",
      "system_neutral2_900",
      "rgb(0, 97, 223)"
    ),
  },
  dateField: {
    padding: 4,
    /** @TODO This should be on web only, it doesn't get TextInput reset styling from RNWeb */
    fontFamily,
  },
  radioGroup: {
    display: "flex",
    flexDirection: "row",
    gap: 6,
  },
  selectedRadioOption: {
    backgroundColor: getCrossPlatformColour(
      "secondarySystemBackground",
      "@android:color/system_accent1_900",
      "rgba(255, 255, 255, 0.25)"
    ) as string,
  },
  selectedRadioOptionText: {
    fontWeight: "600",
  },
  checkbox: {
    height: 16,
    width: 16,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 6,
    borderRadius: 3,
  },
  checkboxWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 4,
  },
  autocompleteInput: {
    zIndex: 0,
  },
  autocompleteResultsFlatlist: {
    backgroundColor: getCrossPlatformColour(
      "secondarySystemBackground",
      "@android:color/system_accent1_900",
      "rgb(39, 39, 39)"
    ),
    paddingHorizontal: 4,
    paddingVertical: 2,
    zIndex: 1000,
    maxHeight: 320,
  },
  autocompleteResult: {
    display: "flex",
    flexDirection: "row",
    gap: 6,
    paddingVertical: 4,
    alignItems: "center",
  },
  autocompleteResultImage: {
    width: 16,
    height: 16,
    borderRadius: "100%",
  },
  autocompleteResultText: {
    lineHeight: 16,
  },
});

export default styles;
