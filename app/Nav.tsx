import React from "react";
import "./Nav.css";
import Link from "next/link";

export default function Nav() {
  return (
    <>
      <div className="navbar">
        <Link href="/">Home</Link>
        <Link href="/inductor/introduction">Inductor</Link>
      </div>
    </>
  );
}
