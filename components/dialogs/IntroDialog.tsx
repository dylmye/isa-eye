import React, { type PropsWithChildren, useCallback, useState } from "react";
import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Text,
} from "@/components/ui";
import hooks from "@/hooks/database";
import Link from "../Link";

const IntroDialog = ({ children }: PropsWithChildren) => {
  const firstShowEnabled = hooks.useValue("showIntroDialog");
  const updateFirstShowCallback = hooks.useSetValueCallback(
    "showIntroDialog",
    () => false,
  );
  const [open, setOpen] = useState(false);

  const onUpdateOpenState = useCallback(
    (newState: boolean) => {
      if (firstShowEnabled && newState === false) {
        updateFirstShowCallback();
      }
      setOpen(newState);
    },
    [firstShowEnabled],
  );

  return (
    <Dialog
      className="flex-1"
      open={(firstShowEnabled as boolean) || open}
      onOpenChange={onUpdateOpenState}
    >
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>This is your ISA Eye.</DialogTitle>
          <DialogDescription>
            <Text>
              Keep track of your ISA contributions, across banks and years.
              {"\n\n"}
              Get started by adding your accounts. Then update these accounts
              with the amount you've contributed to them in the current tax year
              (6th April to 5th April the following year.)
              {"\n\n"}
              <Text className="font-semibold">
                The information you put into ISA Eye is kept entirely private
                and never leaves your device.
              </Text>
              {"\n\n"}
            </Text>
            <Text className="text-sm">
              ISA Eye is a{" "}
              <Link href="https://dylmye.me" className="text-sm">
                dylanmye
              </Link>{" "}
              creation. You can view the source code for the app on{" "}
              <Link
                href="https://github.com/dylmye/isa-eye"
                className="text-sm"
              >
                GitHub
              </Link>
              .
            </Text>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="default">
              <Text>Get Started</Text>
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default IntroDialog;
