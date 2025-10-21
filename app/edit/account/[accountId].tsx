import { router, Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { EditProductDialog } from "@/components/dialogs";
import { Dialog, DialogOverlay } from "@/components/ui";

const EditAccountDialog = () => {
  const searchParams = useLocalSearchParams<{ accountId?: string }>();
  return (
    <SafeAreaView className="flex-1">
      <Stack.Screen options={{ presentation: "transparentModal" }} />
      <Dialog
        className="flex-1"
        defaultOpen
        onOpenChange={() => router.canGoBack() && router.dismiss()}
      >
        <DialogOverlay>
          <EditProductDialog existingId={searchParams?.accountId as string} />
        </DialogOverlay>
      </Dialog>
    </SafeAreaView>
  );
};

export default EditAccountDialog;
