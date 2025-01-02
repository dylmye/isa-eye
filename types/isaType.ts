/** A marketed ISA product. */
export default interface IsaType<CodeType = string> {
  /** Friendly name. */
  name: string;
  /** Constant 'ID'. Must be unique. */
  code: CodeType;
  /** Tax year this ISA was introduced with. Must match a name of a `Ruleset`. */
  introducedWithRuleset: string;
  /** Tax year the ISA was withdrawn. Must match a name of a `Ruleset`. */
  removedWithRuleset?: string;
  /** Summary for use in lists etc. */
  shortDescription: string;
  /** Multi-line description of the product. */
  longDescription: string;
}