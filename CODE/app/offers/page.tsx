import OfferCard from "@/components/OfferCard";

const Offers = () => {
  return (
    <div className="offers">
      <h1 className="offers__title">Our Offers</h1>
      <div className="offers__cards">
        <OfferCard
          title="Single"
          subtitle="Quick"
          feature1="One Picture"
          feature2="Simple Photos"
          feature3="Quick Editing"
        />
        <OfferCard
          title="Premium"
          subtitle="All inclusive"
          feature1="As many as you need"
          feature2="Any format needed"
          feature3="Profound Editing"
        />
        <OfferCard
          title="Buisness"
          subtitle="Big Selection"
          feature1="Your whole Selection"
          feature2="Optimized for Advertisment"
          feature3="Best for Startups"
        />
      </div>
    </div>
  );
};

export default Offers;
