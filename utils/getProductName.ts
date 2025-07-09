import type { Product } from "@/types/db";

export interface GetProductNameProps extends Pick<Product, "friendlyName"> {
  providerName: string;
  productTypeName: string;
}

const getProductName = ({
  friendlyName,
  providerName,
  productTypeName,
}: GetProductNameProps): string => {
  return friendlyName ?? `${providerName} ${productTypeName}`;
};

export default getProductName;
