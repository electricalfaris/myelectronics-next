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
          className={pathname === "/resistor/introduction" ? "active" : ""}
          href="/resistor/introduction/"
        >
          Introduction
        </Link>
        <Link
          className={pathname === "/resistor/test" ? "active" : ""}
          href="/resistor/test/"
        >
          Test
        </Link>
        <Link
          className={pathname === "/resistor/pictures" ? "active" : ""}
          href="/resistor/pictures/"
        >
          Pictures
        </Link>
        <Link
          className={pathname === "/resistor/links" ? "active" : ""}
          href="/resistor/links/"
        >
          Links
        </Link>
        <a href="https://electricalfaris.github.io/my-projects/">
          Selected Projects
        </a>
      </div>
    </>
  );
}
