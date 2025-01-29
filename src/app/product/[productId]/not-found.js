"use client"
import { usePathname } from "next/navigation"
export default function notFound(){
  const pathName = usePathname();
  console.log(pathName)
  return <h1>Product not Found</h1>
}