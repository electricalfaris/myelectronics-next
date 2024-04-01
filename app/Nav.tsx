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
            <Link href="/inductor/introduction/">
              <button
                className={`${
                  pathname === "/inductor/introduction/" ||
                  pathname === "/inductor/test/" ||
                  pathname === "/inductor/pictures/" ||
                  pathname === "/inductor/links/"
                    ? "selectedItem"
                    : ""
                }`}
              >
                Inductor <i className="fa fa-caret-down" />
              </button>
            </Link>
          </div>
          <div className="subnav">
            <Link href="/diode/introduction/">
              <button
                className={`${
                  pathname === "/diode/introduction/" ||
                  pathname === "/diode/test/" ||
                  pathname === "/diode/pictures/" ||
                  pathname === "/diode/links/"
                    ? "selectedItem"
                    : ""
                }`}
              >
                Diode <i className="fa fa-caret-down" />
              </button>
            </Link>
          </div>
          <div className="subnav">
            <Link href="/transformer/introduction/">
              <button
                className={`${
                  pathname === "/transformer/introduction/" ||
                  pathname === "/transformer/test/" ||
                  pathname === "/transformer/pictures/" ||
                  pathname === "/transformer/links/"
                    ? "selectedItem"
                    : ""
                }`}
              >
                Transformer <i className="fa fa-caret-down" />
              </button>
            </Link>
          </div>
        </div>
      </>
    </>
  );
}
