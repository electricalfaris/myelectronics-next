"use client";
import React from "react";
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  return (
    <>
      <>
        {/* The navigation menu */}
        <div className="navbar">
          <Link href="/">
            Home - <code>myelectronics-next</code>
          </Link>
          <div className="subnav">
            <Link href="/ui/resistor/">
              <button
                className={`${
                  pathname === "ui/resistor/" ||
                  pathname === "/resistor/test/" ||
                  pathname === "/resistor/pictures/" ||
                  pathname === "/resistor/links/"
                    ? "selectedItem"
                    : ""
                }`}
              >
                Resistor <i className="fa fa-caret-down" />
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

        </div>
      </>
    </>
  );
}
