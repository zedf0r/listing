export type TypeItem = {
  listing_id: number;
  state: string;
} & TypeItemDescription;

export type TypeItemDescription = {
  url?: string;
  image?: string;
  title?: string;
  currency_code?: string;
  price?: string;
  quantity?: number;
};
