import { ItemDetails } from "./ItemDetails";
import { ItemImage } from "./ItemImage";
import type { TypeItem } from "./type";

export const Item = (props: TypeItem) => {
  if (props.state === "removed") {
    return;
  } else
    return (
      <div className="item">
        <ItemImage key={props.listing_id} url={props.url} image={props.image} />
        <ItemDetails
          key={props.listing_id + 1}
          title={props.title}
          price={props.price}
          quantity={props.quantity}
          currency_code={props.currency_code}
        />
      </div>
    );
};
