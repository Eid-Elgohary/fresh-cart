import useGetAllProducts from "../../hooks/useGetProducts";
import HeroSection from "../../ui/HeroSection";
import Spinner from "../../ui/Spinner";
import CategorySlider from "./CategorySlider";

function HomeContent() {
  const { productsData, isPending } = useGetAllProducts();

  if (isPending) return <Spinner />;

  const beastDealsList = productsData.data.data
    .filter((item) => item.priceAfterDiscount)
    .slice(0, 12);

  const topRatedList = productsData.data.data
    .sort((a, b) => b.ratingsAverage - a.ratingsAverage)
    .slice(0, 12);

  const bestSalesList = productsData.data.data
    .sort((a, b) => b.sold - a.sold)
    .slice(0, 12);

  const newProductsList = productsData.data.data
    .sort((a, b) => b.createdAt - a.createdAt)
    .slice(0, 12);
  return (
    <div>
      <HeroSection />
      <CategorySlider header="best deals" list={beastDealsList} />
      <CategorySlider header="top rated" list={topRatedList} />
      <CategorySlider header="best sales" list={bestSalesList} />
      <CategorySlider header="new products" list={newProductsList} />
    </div>
  );
}

export default HomeContent;
