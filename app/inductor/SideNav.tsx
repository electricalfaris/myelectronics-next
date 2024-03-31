"use client";

import React from "react";
import Link from "next/link";
import "./SideNav.css";
import { usePathname } from "next/navigation";

export default function SideNav() {
  return (
    <>
      {/* Side navigation */}
      <div className="sidenav">
        <Link
          href="/inductor/introduction"
          className={usePathname() === "/inductor/introduction" ? "active" : ""}
        >
          Introduction
        </Link>
        <Link
          href="/inductor/test"
          className={usePathname() === "/inductor/test" ? "active" : ""}
        >
          Test/Fixing
        </Link>
        <Link
          href="/inductor/pictures"
          className={usePathname() === "/inductor/pictures" ? "active" : ""}
        >
          Pictures
        </Link>
        <Link
          href="/inductor/links"
          className={usePathname() === "/inductor/links" ? "active" : ""}
        >
          Links
        </Link>
      </div>
    </>
  );
}
