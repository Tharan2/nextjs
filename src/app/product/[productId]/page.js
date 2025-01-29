import { notFound } from "next/navigation";
export default async function ProductDetails({ params }) {
  const productId = await params.productId;
  if(productId>1000)
    return notFound();
  return <h1>Product ID: {productId}</h1>;
}
