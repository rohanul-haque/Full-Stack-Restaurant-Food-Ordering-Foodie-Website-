import About from "@/components/About";
import Category from "@/components/Category";
import ChefList from "@/components/chefList";
import CustomerReview from "@/components/CustomerReview";
import FoodMenu from "@/components/FoodMenu";
import Hero from "@/components/Hero";
import NewsLatter from "@/components/NewsLatter";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Category />
      <About />
      <FoodMenu />
      <ChefList />
      <CustomerReview />
      <NewsLatter />
    </>
  );
};

export default HomePage;
