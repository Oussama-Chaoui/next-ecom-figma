import ProductItem from "./product-item";

const ProductsGrid = () => {
  return (
    <div className="flex justify-center items-center px-16 py-12 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-screen-2xl w-full">

        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </div>
  );
};

export default ProductsGrid;
