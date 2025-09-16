import { auth } from "@/auth"

export default auth((req) => {
  // If the user is not authenticated, redirect them to the login page.
  if (!req.auth) {
    const newUrl = new URL("/api/auth/signin", req.nextUrl.origin);
    return Response.redirect(newUrl);
  }

  // If authenticated, the request proceeds.
});

// Configure which paths to protect.
export const config = {
  matcher: ["/users/:id*"], // Protect all routes under `users`.
};
