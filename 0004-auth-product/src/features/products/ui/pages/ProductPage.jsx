import React from "react";
import { useProductHook } from "../../hook/useProductHook";
import WindowsXPLoader from "../../../../shared/ui/components/WindowsXPLoader";
import ProductCard from "../components/ProductCard";
import Filter from "../components/Filter";

const ProductPage = () => {
  const {
    data,
    isPending,
    error,
    searchData,
    setSearchData,
    catgoryData,
    setCategoryData,
  } = useProductHook();

  if (isPending) {
    return <WindowsXPLoader />;
  }
  console.log(data);
  return (
    <>
      <div>
        <h1>products</h1>
      </div>
      <div>
        <Filter
          catgoryData={catgoryData}
          setCategoryData={setCategoryData}
          searchData={searchData}
          setSearchData={setSearchData}
        />
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {data?.products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductPage;
