"use client";

import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href=" ">
          myeletronics-next
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbartogglerdemo02"
          aria-controls="navbartogglerdemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbartogglerdemo02">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href=" ">
                Resistor
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href=" ">
                Diode
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href=" ">
                My Projects
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
