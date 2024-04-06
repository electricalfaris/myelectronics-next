"use client";
import Link from "next/link";
import { useState } from "react";
import { componentsTypes } from "@/app/lib/definitions";

export default function SideNav({
  selectedComponent: selectedComponent,
}: {
  selectedComponent: componentsTypes;
}) {
  //  1: Intro, 2: Links, 3: Pictures, 4: Test
  const [curSection, setCurSection] = useState(1);
  const changeSection = (section: number) => {
    setCurSection(section);
  }

  return (
    <>
      {/* <div className="container-fluid"> */}
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <a
              href="#"
              className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
            >
              <span className="fs-5 d-none d-sm-inline">Sections</span>
            </a>
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li className={`nav-item ${curSection === 1 ? "selected" : ""}`}>
                <Link href={selectedComponent} className="nav-link align-middle px-0">
                  <i className="fs-4 bi-house" />{" "}
                  <span className="ms-1 d-none d-sm-inline">Introduction</span>
                </Link>
              </li>
              <li>
                <a
                  href="#submenu1"
                  data-bs-toggle="collapse"
                  className="nav-link px-0 align-middle"
                >
                  <i className="fs-4 bi-link" />{" "}
                  <span className="ms-1 d-none d-sm-inline">Links</span>{" "}
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-0 align-middle">
                  <i className="fs-4 bi-check" />{" "}
                  <span className="ms-1 d-none d-sm-inline">Test/Fixing</span>
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-0 align-middle">
                  <i className="fs-4 bi-camera" />{" "}
                  <span className="ms-1 d-none d-sm-inline">Pictures</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
