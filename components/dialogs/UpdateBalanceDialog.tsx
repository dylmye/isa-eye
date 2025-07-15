import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import { Button } from "react-native";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog";
import ActionTile from "../ActionTile";

const Example = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <ActionTile
          title="Update Balance"
          icon={<MaterialCommunityIcons name="cash-plus" size={52} />}
        />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Update Balance</DialogTitle>
          <DialogDescription>Contents</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button title="ok" />
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Example;
