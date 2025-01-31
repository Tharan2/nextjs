import Link from "next/link"
export default function Header(){
  return <div className=" flex bg-blue-300 justify-between items-center"> 
  <h1 className="  p-3  text-2xl flex-auto font-bold text-center">Header</h1>
    <div className="flex ">
    <Link className="text-blue-700 p-2 contain-style" href="/about">About</Link >
    <Link className="text-blue-700 p-2 contain-style" href="/product">Products</Link >
    <Link className="text-blue-700 p-2 contain-style" href="/login">Login</Link >
    <Link className="text-blue-700 p-2 contain-style" href="/signup">Signup</Link >
    </div>
  </div>
} 

