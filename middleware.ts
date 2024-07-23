import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getValidSubdomain } from "./utils/subdomain";
import { permanentRedirect } from "next/navigation";
import { headers } from "next/headers";

// RegExp for public files
const PUBLIC_FILE = /\.(.*)$/; // Files

export async function middleware(req: NextRequest) {
  // Clone the URL
  const url = req.nextUrl.clone();
  // Skip public files
  if (PUBLIC_FILE.test(url.pathname) || url.pathname.includes("_next")) return;

  const host = req.headers.get("host");
  const subdomain = getValidSubdomain(host);

  if (subdomain) {
    url.pathname = `/florist/${subdomain}${url.pathname}`;
  }

  return NextResponse.rewrite(url);
}