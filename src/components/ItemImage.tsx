import { TypeItem } from "./type";

type TypeImage = Pick<TypeItem, "url" | "image">;

export const ItemImage = ({ url, image }: TypeImage) => {
  return (
    <div className="item-image">
      <a href={url}>
        <img src={image} alt="" />
      </a>
    </div>
  );
};
