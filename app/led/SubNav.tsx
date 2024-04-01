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
                  pathname === "/led/introduction" ? "active" : ""
                }
                href="/led/introduction/"
              >
                Introduction
              </Link>
              <Link
                className={pathname === "/led/test" ? "active" : ""}
                href="/led/test/"
              >
                Test
              </Link>
              <Link
                className={pathname === "/led/pictures" ? "active" : ""}
                href="/led/pictures/"
              >
                Pictures
              </Link>
              <Link
                className={pathname === "/led/links" ? "active" : ""}
                href="/led/links/"
              >
                Links
              </Link>
            </div>
    </>
  )
}
