import { router, Stack } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { UpdateProductBalanceDialog } from "@/components/dialogs";
import { Dialog, DialogOverlay } from "@/components/ui";

const UpdateBalanceDialog = () => {
  return (
    <SafeAreaView className="flex-1">
      <Stack.Screen options={{ presentation: "transparentModal" }} />
      <Dialog
        className="flex-1"
        defaultOpen
        onOpenChange={() => router.canGoBack() && router.dismiss()}
      >
        <DialogOverlay>
          <UpdateProductBalanceDialog />
        </DialogOverlay>
      </Dialog>
    </SafeAreaView>
  );
};

export default UpdateBalanceDialog;
