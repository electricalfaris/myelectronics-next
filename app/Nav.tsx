"use client";
import React from "react";
import "./Nav.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  return (
    <>
      <>
        {/* The navigation menu */}
        <div className="navbar">
          <Link href="/">Home</Link>
          <div className="subnav">
            <Link
              href="/inductor/introduction"
              className={pathname === "/inductor/introduction" ? "active" : ""}
            >
              <button className="subnavbtn">
                Inductor <i className="fa fa-caret-down" />
              </button>
            </Link>
          </div>
        </div>
      </>
    </>
  );
}
