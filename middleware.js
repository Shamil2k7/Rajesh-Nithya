import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Rewrite /reception-static/_next/... to this project's basePath chunks
  if (pathname.startsWith('/reception-static/_next/')) {
    const newPath = pathname.replace('/reception-static/_next/', '/rajesh-nithyar-reception/_next/');
    return NextResponse.rewrite(new URL(newPath, request.url));
  }

  // Rewrite /reception-static/... to this project's basePath public assets
  if (pathname.startsWith('/reception-static/')) {
    const newPath = pathname.replace('/reception-static/', '/rajesh-nithyar-reception/');
    return NextResponse.rewrite(new URL(newPath, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/reception-static/:path*'],
};
