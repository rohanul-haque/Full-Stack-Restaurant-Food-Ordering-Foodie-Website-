import About from "@/components/About";
import Category from "@/components/Category";
import ChefList from "@/components/ChefList";
import CustomerReview from "@/components/CustomerReview";
import FoodMenu from "@/components/FoodMenu";
import Hero from "@/components/Hero";
import NewsLatter from "@/components/NewsLatter";

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Category />
      <About />
      <FoodMenu />
      <ChefList />
      <CustomerReview />
      <NewsLatter />
    </div>
  );
};

export default HomePage;
