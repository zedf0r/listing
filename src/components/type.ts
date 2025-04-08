export type TypeItem = {
  listing_id: number;
  state: string;
} & TypeItemDetail &
  TypeImage;

export type TypeImage = {
  url?: string;
  image?: string;
};

export type TypeItemDetail = {
  title?: string;
  price?: string;
  quantity?: number;
  currency_code?: string;
};
