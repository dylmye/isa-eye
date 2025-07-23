import { Link, Stack } from "expo-router";
import { View } from "react-native";
import { Card, Text } from "@/components/ui";

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
            <Link href="/">
              <Text>Click to return home.</Text>
            </Link>
          </Card.Content>
        </Card>
      </View>
    </>
  );
}
