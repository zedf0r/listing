import { TypeItemDetail } from "./type";

export const ItemDetails = ({
  title,
  price,
  quantity,
  currency_code,
}: TypeItemDetail) => {
  return (
    <div className="item-details">
      <p className="item-title">{getTitleLength(title)}</p>
      <p className="item-price">{getCurrencyCode(currency_code, price)}</p>
      <p className={`item-quantity level-${getQuantityLevel(quantity)}`}>
        {quantity}
      </p>
    </div>
  );
};

const getQuantityLevel = (quantity?: number) => {
  if (quantity === undefined) {
    return "";
  }
  if (quantity < 10) {
    return "low";
  } else if (quantity > 20) {
    return "high";
  } else {
    return "medium";
  }
};

const getCurrencyCode = (currency_code?: string, price?: string) => {
  if (currency_code === "EUR") {
    return `€${price}`;
  } else if (currency_code === "USD") {
    return "$" + price;
  } else {
    return `${price} ${currency_code}`;
  }
};

const getTitleLength = (title?: string): string => {
  if (title === undefined) {
    return "";
  }

  if (title.length > 50) {
    return `${title.slice(0, 50)}...`;
  }

  return title;
};
