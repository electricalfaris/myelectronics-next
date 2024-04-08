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
                  pathname === "/transistor/introduction" ? "active" : ""
                }
                href="/transistor/introduction/"
              >
                Introduction
              </Link>
              <Link
                className={pathname === "/transistor/test" ? "active" : ""}
                href="/transistor/test/"
              >
                Test
              </Link>
              <Link
                className={pathname === "/transistor/pictures" ? "active" : ""}
                href="/transistor/pictures/"
              >
                Pictures
              </Link>
              <Link
                className={pathname === "/transistor/links" ? "active" : ""}
                href="/transistor/links/"
              >
                Links
              </Link>
            </div>
    </>
  )
}
