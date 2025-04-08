import { TypeImage } from "./type";

export const ItemImage = ({ url, image }: TypeImage) => {
  return (
    <div className="item-image">
      <a href={url}>
        <img src={image} alt="" />
      </a>
    </div>
  );
};
