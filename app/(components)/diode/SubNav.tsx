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
          href="/diode/introduction/"
        >
          Introduction
        </Link>
        <Link
          className={pathname === "/resistor/test" ? "active" : ""}
          href="/diode/test/"
        >
          Test
        </Link>
        <Link
          className={pathname === "/resistor/pictures" ? "active" : ""}
          href="/diode/pictures/"
        >
          Pictures
        </Link>
        <Link
          className={pathname === "/resistor/links" ? "active" : ""}
          href="/diode/links/"
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
