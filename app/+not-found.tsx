import { Stack } from "expo-router";
import { View } from "react-native";
import Link from "@/components/Link";
import { Card } from "@/components/ui";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View className="flex-1 items-center justify-center p-5">
        <Card>
          <Card.Header>
            <Card.Title>Can't find this page.</Card.Title>
          </Card.Header>
          <Card.Content>
            <Link href="/">Click to return home.</Link>
          </Card.Content>
        </Card>
      </View>
    </>
  );
}
