import Account from "@/types/account";

const getAccountName = ({ friendlyName, bank, isaType }: Pick<Account, 'friendlyName' | 'bank' | 'isaType'>): string => {
  return friendlyName ?? `${bank.name} ${isaType?.name}`
}

export default getAccountName;
