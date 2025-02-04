import { NextResponse } from "next/server";

export function middleware(request){

  if(request.nextUrl.pathname.startsWith('/product')){
    console.log("redirecting to login")
    return NextResponse.redirect(new URL('/login', request.url));
  }
  if(request.nextUrl.pathname.startsWith('/api/hai')){
    if(true){
      return NextResponse.json({message:"api is protected"})
  }
  }
  return NextResponse.next()
}
export const config = {
  matcher:['/api/:path*','/product/:path*'],
  }