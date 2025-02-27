import Account from "@/types/account";

const getAccountName = ({ friendlyName, bank, isaType }: Account): string => {
  return friendlyName ?? `${bank.name} ${isaType?.name}`
}

export default getAccountName;
