'use client'
import Link from "next/link"
import { usePathname } from "next/navigation";
export default function Header(){
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="relative flex bg-blue-300 justify-between p-3 items-center">
      {/* Header */}
      <h1 className="absolute left-1/2  -translate-x-1/2 p-3 text-2xl font-bold text-center">
        Header
      </h1>
  
      {/* Navigation Links */}
      <div className="flex ml-auto">
        <Link className="text-blue-700 p-2 contain-style " href="/">
          Home
        </Link>
        <Link className="text-blue-700 p-2 contain-style" href="/about" prefetch={false}>
          About
        </Link>
        <Link className="text-blue-700 p-2 contain-style" href="/api_page">
          Api
        </Link>
        <Link className="text-blue-700 p-2 contain-style" href="/product">
          Products
        </Link>
        <Link className="text-blue-700 p-2 contain-style" href="/login">
          Login
        </Link>
        <Link className="text-blue-700 p-2 contain-style" href="/signup">
          Signup
        </Link>
      </div>
    </div>
  );
  
}