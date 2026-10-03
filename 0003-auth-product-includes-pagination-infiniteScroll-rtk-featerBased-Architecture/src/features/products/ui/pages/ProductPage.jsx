import React from "react";
import useProductHook from "../../hooks/useProductHook";
import ProductCard from "../components/ProductCard";
import Loading from "../../../../shared/ui/components/Loading";

const ProductPage = () => {
  const { data, isPending, error } = useProductHook();

  console.log(data?.products);

  if (isPending) return <Loading />;
  if (error) return <Loading />;

  return (
    <div className="min-h-screen w-full bg-slate-100 px-6 py-8">
      <h1 className="mb-8 text-center text-3xl font-bold text-slate-900">
        Products
      </h1>

      <div className="flex w-full flex-wrap justify-center gap-6">
        {data?.products?.map((val) => (
          <ProductCard key={val.id} product={val} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
