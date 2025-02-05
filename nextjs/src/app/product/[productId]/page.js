import { notFound } from "next/navigation";

export default async function ProductDetails({ params }) {

  const {productId} = await params;

  if(productId>100)
    return notFound();
  
  return <div className="flex flex-col text-2xl font-bold items-center"><h1>Dynamic page</h1><h1>Product ID: {productId}</h1></div>;
}
