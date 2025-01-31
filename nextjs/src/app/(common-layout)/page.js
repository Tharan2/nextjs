import Link from "next/link";
export default function Home() {
  return (
    <div className="bg-slate-300 p-10">
    <div className=" text-2xl font-bold">Home</div>
    <ul>
      <li className="text-blue-700 underline contain-style"><Link href="/about">about</Link ></li>
      <li className="text-blue-700 underline contain-style"><Link href="/product">product</Link ></li>
      <li className="text-blue-700 underline contain-style"><Link href="/login">Login</Link ></li>
      <li className="text-blue-700 underline contain-style"><Link href="/signup">signup</Link ></li>
    </ul>
    </div>
  );
}
