import FeaturedListings from "../components/featured listings/FeaturedListings";
import Hero from "../components/hero/Hero";
import ViewedProperties from "../components/viewed properties/ViewedProperties";

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedListings />
      <ViewedProperties />
    </div>
  );
};

export default Home;
