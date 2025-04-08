import { ItemDetails } from "./ItemDetails";
import { ItemImage } from "./ItemImage";
import type { TypeItem } from "./type";

export const Item = ({
  listing_id,
  url,
  image,
  title,
  currency_code,
  price,
  quantity,
}: TypeItem) => {
  return (
    <div className="item">
      <ItemImage key={listing_id} url={url} image={image} />
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
