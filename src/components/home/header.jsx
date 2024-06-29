
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import React from "react";

export const Header =  () => {
  // Fetch user authentication details on the server side
  const { userId } = auth();
  return (
    <header className="bg-black text-white shadow-md">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <a className="flex flex-col items-center text-blue-800" href="/">
          <Image src="/logo.svg" alt="logo" height={70} width={70} />
        </a>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <a
                  className=" transition hover:text-blue-500"
                  href="/about"
                >
                  About
                </a>
              </li>
              {!userId ? null: (
                <li>
                <a
                  className=" transition hover:text-blue-500"
                  href="/dashboard"
                >
                  Dashboard
                </a>
              </li>
              )}
              <li>
                <a
                  className=" transition hover:text-blue-500"
                  href="#"
                >
                  API
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              {!userId ? (
                <a
                  className="block rounded-md bg-blue-600 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-white hover:text-black hover:rounded-md hover:border-blue-600"
                  href="/sign-in"
                >
                  Login
                </a>
              ) : (
                <UserButton/>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
