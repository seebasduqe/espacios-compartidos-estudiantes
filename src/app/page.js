"use client";
import Image from "next/image";
import Link from "next/link";
import { MapPinIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { useAuth } from "./AuthContext";

export default function Home() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-6xl font-bold text-white">
      DesingSpace
      </h1>

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

        <div className="flex justify-center">
          <Image src="/images/logospace.png" width={800} height={10} />
        </div>

        <div className="flex gap-9 items-center flex-col sm:flex-row">
          <Link href={isAuthenticated ? "/dashboard" : "/login"}>
            <span
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPinIcon className="h-5 w-5 mr-2" />
              Hacer Un Espapcio
            </span>
          </Link>

          <Link href={isAuthenticated ? "/reservas" : "/login"}>
            <span
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPinIcon className="h-5 w-5 mr-2" />
              Ver Espacios
            </span>
          </Link>

          <Link href="/register">
            <span
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ArrowRightIcon className="h-5 w-5 mr-2" />
              Registrarse
            </span>
          </Link>
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <span
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Emprendimiento
        </span>
        <span
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          App web DesingSpace
        </span>
        <span
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
        </span>
      </footer>
    </div>
  );
}
