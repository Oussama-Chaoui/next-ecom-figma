const ProductsGrid = () => {
  return (
    <div className="flex justify-center items-center px-16 py-12 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-screen-2xl w-full">
        <div className="bg-blue-500 w-[285px] h-[446px]">Card 1</div>
        <div className="bg-green-500 w-[285px] h-[446px]">Card 2</div>
        <div className="bg-red-500 w-[285px] h-[446px]">Card 3</div>
        <div className="bg-yellow-500 w-[285px] h-[446px] pr-0">Card 4</div>
        <div className="bg-purple-500 w-[285px] h-[446px]">Card 5</div>
        <div className="bg-pink-500 w-[285px] h-[446px]">Card 6</div>
        <div className="bg-indigo-500 w-[285px] h-[446px]">Card 7</div>
        <div className="bg-teal-500 w-[285px] h-[446px] pr-0">Card 8</div>
      </div>
    </div>
  );
};

export default ProductsGrid;
