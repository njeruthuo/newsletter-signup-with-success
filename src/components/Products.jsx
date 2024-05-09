import FormSignUp from "./FormSignUp";
import ProductListItem from "./ProductListItem";

const Products = () => {
  return (
    <section className="py-6 sm:py-12 px-2 sm:px-4 text-darkSlateGray">
      <h3 className="text-center font-bold text-3xl sm:py-2 ">Stay Updated!</h3>
      <p className="py-1">
        Join 60,000+ product managers receiving monthly updates on:
      </p>

      <div>
        <ProductListItem />
      </div>

      <div>
        <FormSignUp />
      </div>
    </section>
  );
};
export default Products;
