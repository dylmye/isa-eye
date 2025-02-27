import { IsaTypeCodes } from "@/constants/isaTypes";
import Bank from "./bank";
import IsaType from "./isaType";

export default interface Account {
  /** The bank associated with the account. */
  bank: Bank;
  /** First year (`Ruleset`) the account is associated with. */
  openedInTaxYear: string;
  /** Final year (`Ruleset`) the account is associated with. */
  closedInTaxYear?: string;
  /** Name for account provided by user. */
  friendlyName?: string;
  isaType: IsaType<IsaTypeCodes>;
  /** If the account was transferred, the source account. */
  transferredFromAccount?: Account;
}
