"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "@/app/globals.css";

export default function SubNav() {
  const pathname = usePathname();

  return (
    <>
      <div className="subnav-content">
        <Link
          className={pathname === "/capacitor/introduction" ? "active" : ""}
          href="/capacitor/introduction/"
        >
          Introduction
        </Link>
        <Link
          className={pathname === "/capacitor/test" ? "active" : ""}
          href="/capacitor/test/"
        >
          Test
        </Link>
        <Link
          className={pathname === "/capacitor/pictures" ? "active" : ""}
          href="/capacitor/pictures/"
        >
          Pictures
        </Link>
        <Link
          className={pathname === "/capacitor/links" ? "active" : ""}
          href="/capacitor/links/"
        >
          Links
        </Link>
      </div>
    </>
  );
}
