import { getToken } from "next-auth/jwt";
import { NextRequestWithAuth, withAuth } from "next-auth/middleware";
import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

const setupHeadersAndCSP = () => {
    const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
    const cspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic';
    style-src 'self' 'nonce-${nonce}';
    img-src 'self' blob: data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    block-all-mixed-content;
    upgrade-insecure-requests;
`;

    const requestHeaders = new Headers();

    // Setting request headers
    requestHeaders.set("x-nonce", nonce);
    requestHeaders.set(
        "Content-Security-Policy",
        // Replace newline characters and spaces
        cspHeader.replace(/\s{2,}/g, " ").trim()
    );
    requestHeaders.set("Referrer-Policy", "same-origin");
    requestHeaders.set("X-Frame-Options", "DENY");
    requestHeaders.set("X-Content-Type-Options", "nosniff");
    requestHeaders.set("X-DNS-Prefetch-Control", "off");
    requestHeaders.set("Strict-Transport-Security", "max-age=63072000");
    requestHeaders.set(
        "Permissions-Policy",
        "camera=(), microphone=(), geolocation=()"
    );
    requestHeaders.set(
        "Feature-Policy",
        "camera 'none'; microphone 'none'; geolocation 'none'"
    );
    requestHeaders.set("X-XSS-Protection", "1; mode=block");
    return requestHeaders;
};

const isCredentialPage = (pathname: string) => {
    return (
        pathname.startsWith("/login") ||
        pathname.startsWith("/register") ||
        pathname.startsWith("/forgot-password")
    );
};

export default async function middleware(
    req: NextRequest,
    event: NextFetchEvent
) {
    const token = await getToken({ req });
    const isAuthenticated = !!token;
    if (isAuthenticated && isCredentialPage(req.nextUrl.pathname))
        return NextResponse.redirect(new URL("/profile", req.url));

    if (isCredentialPage(req.nextUrl.pathname)) return NextResponse.next();

    

    const requestHeaders = setupHeadersAndCSP();
}

export const config = {
    matcher: [
        "/login/:path*",
        "/register/:path*",
        "/forgot-password/:path*",
        "/((?!api|_next/static|_next/image|favicon.ico).*)",
        "/profile/:path*",
    ],
};
