import Link from "next/link"
export const metadata = {
  title:"Products",
  description:"this is Product page"
}
export default function product(){
  return (<div className=" p-5 text-2xl font-serif">
    <h1 className="font-bold text-3xl">Products</h1>
    <div className="flex p-3">
    <h3>Product 1</h3>
    <Link href='/product/product1' className=" text-blue-600 underline bg-bl"> - reviews</Link></div>
    <div className="flex p-3">
    <h3>Product 2</h3>
    <Link href='/product/product2' className=" text-blue-600 underline bg-bl"> - reviews</Link></div>
    <div className="flex p-3">
    <h3>Product 3</h3>
    <Link href='/product/product3' className=" text-blue-600 underline bg-bl"> - reviews</Link></div>
    <div className="flex p-3">
    <h3>Product 4</h3>
    <Link href='/product/product4' className=" text-blue-600 underline bg-bl"> - reviews</Link></div>
    <div className="flex p-3">
    <h3>Product 5</h3>
    <Link href='/product/product5' className=" text-blue-600 underline bg-bl"> - reviews</Link></div>
  </div>)
}