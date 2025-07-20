import { View } from "react-native";
import { Alert } from "@/components/ui";

interface ProductCardsEmptyProps {
  anyExistingProducts: boolean;
}

const ProductCardsEmpty = ({ anyExistingProducts }: ProductCardsEmptyProps) => (
  <View className="flex w-full items-center">
    <Alert
      icon="information-outline"
      className="max-w-xl"
      variant="informative"
    >
      <Alert.Title>Nothing to see here</Alert.Title>
      <Alert.Description>
        {anyExistingProducts
          ? "None of your accounts have a balance in this year. Update your balance to get started."
          : "Add an account to get started!"}
      </Alert.Description>
    </Alert>
  </View>
);

export default ProductCardsEmpty;
