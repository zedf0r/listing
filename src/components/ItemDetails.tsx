import { TypeItem } from "./type";

type TypeItemDetail = Pick<
  TypeItem,
  "title" | "price" | "quantity" | "currency_code"
>;

export const ItemDetails = ({
  title,
  price,
  quantity,
  currency_code,
}: TypeItemDetail) => {
  console.log(title);
  return (
    <div className="item-details">
      <p className="item-title">{getTitleLength(title)}</p>
      <p className="item-price">
        {`${getCurrencyCode(currency_code)} ${price ? price : ""}`}
      </p>
      <p className={`item-quantity level-${getQuantityLevel(quantity)}`}>
        {quantity}
      </p>
    </div>
  );
};

const getQuantityLevel = (quantity: number | undefined) => {
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

const getCurrencyCode = (currency_code: string | undefined) => {
  if (currency_code === undefined) {
    return "";
  }
  if (currency_code === "EUR") {
    return "€";
  } else if (currency_code === "USD") {
    return "$";
  } else {
    return currency_code;
  }
};

const getTitleLength = (title: string | undefined): string => {
  if (title === undefined) {
    return "";
  }

  if (title.length > 50) {
    return `${title.slice(0, 50)}...`;
  }

  return title;
};
