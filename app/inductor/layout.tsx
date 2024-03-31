import SideNav from "./SideNav";
import "./styles.css";

export default function InductorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SideNav />
      <main>{children}</main>
    </>
  );
}
