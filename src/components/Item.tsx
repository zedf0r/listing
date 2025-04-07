import { ItemDetails } from "./ItemDetails";
import { ItemImage } from "./ItemImage";
import type { TypeItem } from "./type";

export const Item = ({
  listing_id,
  url,
  MainImage,
  title,
  currency_code,
  price,
  quantity,
}: TypeItem) => {
  return (
    <div className="item">
      <ItemImage key={listing_id} url={url} MainImage={MainImage} />
      <ItemDetails
        key={listing_id + 1}
        title={title}
        price={price}
        quantity={quantity}
        currency_code={currency_code}
      />
    </div>
  );
};
