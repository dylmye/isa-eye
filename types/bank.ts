export default interface Bank {
  /** Unique name in db friendly format. */
  id: string;
  /** Friendly name. */
  name: string;
  /** Icon for the bank. */
  iconFile: NodeRequire;
  /** Other names and spellings for the bank, including initials and merged companies. */
  aliases: string[];
}
