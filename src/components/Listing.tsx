import { Item } from "./Item";
import data from "../data/etsy.json";

export const Listing = () => {
  return (
    <div className="item-list">
      {data.map((item) => (
        <Item
          {...item}
          key={item.listing_id}
          listing_id={item.listing_id}
          image={item.MainImage?.url_570xN}
        />
      ))}
    </div>
  );
};
