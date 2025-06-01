import { Product } from "@/types/db";

export interface GetAccountNameProps extends Pick<Product, 'friendlyName'> {
  providerName: string;
  productTypeName: string;
}

const getAccountName = ({ friendlyName, providerName, productTypeName }: GetAccountNameProps): string => {
  return friendlyName ?? `${providerName} ${productTypeName}`
}

export default getAccountName;
