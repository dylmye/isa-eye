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
  validationMessage: {
    padding: 6,
    backgroundColor: getCrossPlatformColour(
      "systemRed",
      "system_error_200",
      "rgb(255, 151, 151)"
    ),
    borderRadius: 4,
    marginBottom: 8,
  },
  validationMessageText: {
    color: getCrossPlatformColour(
      "systemRed",
      "system_error_900",
      "rgb(223, 0, 0)"
    ),
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    lineHeight: 18,
  },
  infoMessage: {
    padding: 6,
    backgroundColor: getCrossPlatformColour(
      "systemBlue",
      "system_neutral2_200",
      "rgb(151, 222, 255)"
    ),
    borderRadius: 4,
    marginBottom: 8,
    maxWidth: 600,
  },
  infoMessageText: {
    color: getCrossPlatformColour(
      "systemBlue",
      "system_neutral2_900",
      "rgb(0, 97, 223)"
    ),
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    lineHeight: 18,
  },
  dateField: {
    padding: 4,
    /** @TODO This should be on web only, it doesn't get TextInput reset styling from RNWeb */
    fontFamily,
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
});

export default styles;
