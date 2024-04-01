"use client";
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import "./SubNav.css";

export default function SubNav() {
  const pathname = usePathname();

  return (
    <>
              <div className="subnav-content">
              <Link
                className={
                  pathname === "/diode/introduction" ? "active" : ""
                }
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
    </>
  )
}
