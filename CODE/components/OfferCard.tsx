import { OfferCardProps } from "@/types";

const OfferCard = ({
  title,
  subtitle,
  feature1,
  feature2,
  feature3,
}: OfferCardProps) => {
  return (
    <div className="offerCard">
      <div className="offerCard__head">
        <span className="offerCard__circle"></span>
        <h1 className="offerCard__title">{title}</h1>
        <h2 className="offerCard__subtitle">{subtitle}</h2>
      </div>
      <div className="offerCard__body">
        <p className="offerCard__feature">{feature1}</p>
        <p className="offerCard__feature">{feature2}</p>
        <p className="offerCard__feature">{feature3}</p>
      </div>
      <div className="offerCard__footer">
        <button className="offerCard__button">Buy Now</button>
      </div>
    </div>
  );
};

export default OfferCard;
