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
            <Link href="@/ui/resistor/">
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
          <div className="subnav">
            <Link href="/capacitor/introduction/">
              <button
                className={`${
                  pathname === "/capacitor/introduction/" ||
                  pathname === "/capacitor/test/" ||
                  pathname === "/capacitor/pictures/" ||
                  pathname === "/capacitor/links/"
                    ? "selectedItem"
                    : ""
                }`}
              >
                Capacitor <i className="fa fa-caret-down" />
              </button>
            </Link>
          </div>
          <div className="subnav">
            <Link href="/transistor/introduction/">
              <button
                className={`${
                  pathname === "/transistor/introduction/" ||
                  pathname === "/transistor/test/" ||
                  pathname === "/transistor/pictures/" ||
                  pathname === "/transistor/links/"
                    ? "selectedItem"
                    : ""
                }`}
              >
                Transistor <i className="fa fa-caret-down" />
              </button>
            </Link>
          </div>
          <div className="subnav">
            <Link href="/led/introduction/">
              <button
                className={`${
                  pathname === "/led/introduction/" ||
                  pathname === "/led/test/" ||
                  pathname === "/led/pictures/" ||
                  pathname === "/led/links/"
                    ? "selectedItem"
                    : ""
                }`}
              >
                Led <i className="fa fa-caret-down" />
              </button>
            </Link>
          </div>
        </div>
      </>
    </>
  );
}
