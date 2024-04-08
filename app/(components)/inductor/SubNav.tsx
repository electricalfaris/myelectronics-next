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
    </>
  )
}
