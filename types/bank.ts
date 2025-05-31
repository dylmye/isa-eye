export default interface Bank<TId = string> {
  /** Unique name in db friendly format. */
  id: TId;
  /** Friendly name. */
  name: string;
  /** Icon for the bank. */
  iconRelativeUrl: string;
  /** Other names and spellings for the bank, including initials and merged companies. */
  aliases: string[];
}
