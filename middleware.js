// export { default } from "next-auth/middleware"

import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server";


export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    const {pathname, origin} = req.nextUrl;
    const {token} = req.nextauth;

    if(pathname.startsWith('/dashboard') && token?.user?.role !== 'admin'){
        // return NextResponse.redirect(origin)
        return new NextResponse('you are not authorized!')
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        return !!token// true => middlewre is run; 
      }
    },
  }
);






export const config = { matcher: ["/dashboard", '/protected/:paht*','/profile/:path*'] };