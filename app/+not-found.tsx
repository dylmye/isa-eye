import { Link, Stack } from "expo-router";
import { View } from "react-native";
import { Text } from "@/components/ui";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View className="flex-1 items-center justify-center p-5">
        <Text className="font-bold text-2xl">Can't find this page.</Text>
        <Link href="/" className="mt-4 py-4">
          <Text>Click to return home.</Text>
        </Link>
      </View>
    </>
  );
}
