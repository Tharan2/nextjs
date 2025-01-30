import Link from "next/link"
export const metadata = {
  title:"Products",
  description:"this is Product page"
}
export default function product(){
  return (<>
    <h1>Products</h1>
    
    <h3>product 1</h3>
    <Link href='/product/product1' className=" text-blue-600 underline bg-bl">reviews</Link>
    <h3>product 2</h3>
    <h3>product 3</h3>
    <h3>product 4</h3>
  </>)
}