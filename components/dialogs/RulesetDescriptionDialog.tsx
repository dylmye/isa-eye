import React, { type PropsWithChildren, useState } from "react";
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
import { useCurrentYearRulesetExceptions } from "@/db/hooks/rulesetExceptions";
import hooks from "@/hooks/database";
import { formatCurrency } from "@/utils/formatCurrency";

const RulesetDescriptionDialog = ({ children }: PropsWithChildren) => {
  const [open, setOpen] = useState(false);

  const currentRulesetId = hooks.useValue("currentTaxYear");

  const currentRuleset = hooks.useRow("rulesets", currentRulesetId as string);
  const rulesetwithExceptions = useCurrentYearRulesetExceptions();

  return (
    <Dialog className="flex-1" open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Notes for {currentRulesetId} tax year</DialogTitle>
          <DialogDescription>
            <Text>{currentRuleset.notes ?? "No notes for this tax year."}</Text>
            <Text className="font-semibold">
              {"\n\n"}Main allowance:{" "}
              {formatCurrency(
                Number.parseFloat(currentRuleset.sharedAllowancePence ?? "0") /
                  100,
              )}
            </Text>
            {rulesetwithExceptions?.exceptions?.map((e) => (
              <Text key={e.name as string}>
                {"\n"}
                {e.name}:{" "}
                {formatCurrency(
                  Number.parseFloat(e.allowancePence as string) / 100,
                )}
                {!e.includedInShared && " (additional to main allowance)"}
              </Text>
            ))}
            <Text className="italic">
              {"\n\n"}
              ISA Eye provides this analysis of the changes announced by the
              Government exclusively for informative purposes. This analysis is
              not financial advice or recommendations, nor is it a substitute
              for financial advice. E&OE.
            </Text>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="default">
              <Text>Close</Text>
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default RulesetDescriptionDialog;
