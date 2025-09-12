"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { status, data: session } = useSession();

  return (
    <div className="flex bg-slate-200 p-5 space-x-3">
      <Link href="/" className="mr-5">
        Next.js
      </Link>
      <Link href="/users">Users</Link>
      {status === "loading" && <div>Loading</div>}
      {status === "authenticated" && (
        <div>
          {session.user!.name}
          <button className="ml-3" onClick={() => signOut()}>
            Sign Out
          </button>
        </div>
      )}
      {status === "unauthenticated" && (
        <button onClick={() => signIn("google")}>Login</button>
      )}
    </div>
  );
};

export default Navbar;
