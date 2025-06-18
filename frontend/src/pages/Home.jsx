import FavouriteProperties from "../components/favourite properties/FavouriteProperties";
import FeaturedListings from "../components/featured listings/FeaturedListings";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import ViewedProperties from "../components/viewed properties/ViewedProperties";

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedListings />
      <ViewedProperties />
      <FavouriteProperties />
      <Footer />
    </div>
  );
};

export default Home;
