import Account from "@/types/account";

export interface GetAccountNameProps extends Pick<Account, 'friendlyName' | 'bank' | 'isaType'> { }

const getAccountName = ({ friendlyName, bank, isaType }: GetAccountNameProps): string => {
  return friendlyName ?? `${bank.name} ${isaType?.name}`
}

export default getAccountName;
