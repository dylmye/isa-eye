import { Stack } from "expo-router";
import React from "react";

import { AddProductDialog } from "@/components/dialogs";
import { Dialog, DialogOverlay } from "@/components/ui";

const AddAccountDialog = () => {
  const portalHostName = "dialog-portal-add-account";
  return (
    <React.Fragment>
      <Stack.Screen options={{ presentation: "transparentModal" }} />
      <Dialog className="flex-1" defaultOpen>
        <DialogOverlay>
          <AddProductDialog portalHostName={portalHostName} />
        </DialogOverlay>
      </Dialog>
    </React.Fragment>
  );
};

export default AddAccountDialog;
