import { Item } from "./Item";
import data from "../data/etsy.json";

export const Listing = () => {
  return (
    <div className="item-list">
      {data.map((item) => (
        <Item
          listing_id={item.listing_id}
          url={item.url}
          image={item.MainImage?.url_570xN}
          title={item.title}
          currency_code={item.currency_code}
          price={item.price}
          quantity={item.quantity}
        />
      ))}
    </div>
  );
};
