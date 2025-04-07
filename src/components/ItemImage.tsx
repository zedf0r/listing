import { TypeItem } from "./type";

type TypeImage = Pick<TypeItem, "url" | "MainImage">;

export const ItemImage = ({ url, MainImage }: TypeImage) => {
  return (
    <div className="item-image">
      <a href={url}>
        <img src={MainImage} alt="" />
      </a>
    </div>
  );
};
