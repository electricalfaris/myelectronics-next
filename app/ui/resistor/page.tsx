import { Intro, Pictures, Links, Test } from "@/app/components/Resistor";
import "@/app/globals.css";
import Link from "next/link";
import SideNav from "../SideNav";
import { componentsTypes } from "@/app/lib/definitions";

export default function Page() {
  return (
    <>
      <SideNav selectedComponent={componentsTypes.resistor} />
    </>
  );
}
