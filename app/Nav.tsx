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
            <button className="subnavbtn">
              Inductor <i className="fa fa-caret-down" />
            </button>
            <div className="subnav-content">
              <Link
                className={
                  pathname === "/inductor/introduction" ? "active" : ""
                }
                href="/inductor/introduction/"
              >
                Introduction
              </Link>
              <Link
                className={pathname === "/inductor/test" ? "active" : ""}
                href="/inductor/test/"
              >
                Test
              </Link>
              <Link
                className={pathname === "/inductor/pictures" ? "active" : ""}
                href="/inductor/pictures/"
              >
                Pictures
              </Link>
              <Link
                className={pathname === "/inductor/links" ? "active" : ""}
                href="/inductor/links/"
              >
                Links
              </Link>
            </div>
          </div>
          <div className="subnav">
            <button className="subnavbtn">
              Diode <i className="fa fa-caret-down" />
            </button>
            <div className="subnav-content">
              <Link
                className={pathname === "/diode/introduction" ? "active" : ""}
                href="/diode/introduction/"
              >
                Introduction
              </Link>
              <Link
                className={pathname === "/diode/test" ? "active" : ""}
                href="/diode/test/"
              >
                Test
              </Link>
              <Link
                className={pathname === "/diode/pictures" ? "active" : ""}
                href="/diode/pictures/"
              >
                Pictures
              </Link>
              <Link
                className={pathname === "/diode/links" ? "active" : ""}
                href="/diode/links/"
              >
                Links
              </Link>
            </div>
          </div>
          <div className="subnav">
            <button className="subnavbtn">
              Transformer <i className="fa fa-caret-down" />
            </button>
            <div className="subnav-content">
              <Link
                className={
                  pathname === "/transformer/introduction" ? "active" : ""
                }
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
          </div>
        </div>
      </>
    </>
  );
}
