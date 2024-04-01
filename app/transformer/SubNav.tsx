"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./SubNav.css";

export default function SubNav() {
  const pathname = usePathname();

  return (
    <>
      <div className="subnav-content">
        <Link
          className={pathname === "/transformer/introduction" ? "active" : ""}
          href="/transformer/introduction/"
        >
          Introduction
        </Link>
        <Link
          className={pathname === "/transformer/test" ? "active" : ""}
          href="/transformer/test/"
        >
          Test
        </Link>
        <Link
          className={pathname === "/transformer/pictures" ? "active" : ""}
          href="/transformer/pictures/"
        >
          Pictures
        </Link>
        <Link
          className={pathname === "/transformer/links" ? "active" : ""}
          href="/transformer/links/"
        >
          Links
        </Link>
      </div>
    </>
  );
}
