import { router, Stack } from "expo-router";
import React from "react";

import { UpdateProductBalanceDialog } from "@/components/dialogs";
import { Dialog, DialogOverlay } from "@/components/ui";

const UpdateBalanceDialog = () => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default UpdateBalanceDialog;
