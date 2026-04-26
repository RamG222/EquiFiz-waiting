import { NextResponse } from "next/server";

function unauthorized(req) {
  const url = req.nextUrl.clone();

  // For pages, trigger browser Basic Auth prompt.
  if (url.pathname.startsWith("/admin")) {
    return new NextResponse("Authentication required.", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="Equifiz Admin", charset="UTF-8"',
      },
    });
  }

  // For APIs, return JSON.
  return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
}

function parseBasicAuth(headerValue) {
  if (!headerValue) return null;
  const [scheme, encoded] = headerValue.split(" ");
  if (scheme !== "Basic" || !encoded) return null;

  try {
    const decoded = Buffer.from(encoded, "base64").toString("utf8");
    const idx = decoded.indexOf(":");
    if (idx === -1) return null;
    return { user: decoded.slice(0, idx), pass: decoded.slice(idx + 1) };
  } catch {
    return null;
  }
}

export function middleware(req) {
  const adminUser =  "admin";
  const adminPass = "abcd1234";

  // If no credentials are configured, keep admin locked down.
  if (!adminPass) {
    return unauthorized(req);
  }

  const authHeader = req.headers.get("authorization");

  // Basic Auth for browser access.
  const basic = parseBasicAuth(authHeader);
  if (!basic) return unauthorized(req);

  if (basic.user !== adminUser || basic.pass !== adminPass) {
    return unauthorized(req);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};

