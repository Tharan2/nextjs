import Link from "next/link"
export default function notFound(){
 return (
  <div className="flex flex-col items-center justify-center h-screen">
    <h1 className="text-6xl text-red-500 font-bold font-sans animate-bounce">404</h1>
    <p className="text-2xl">The page you looking for not found</p>
    <Link href="/" className="bg-blue-600 px-4 py-2 text-gray-100 rounded-xl my-2 ">Go to Home</Link>
  </div>
 )
}