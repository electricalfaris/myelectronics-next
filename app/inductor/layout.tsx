import "./styles.css";
import SubNav from "./SubNav";

export default function InductorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SubNav />
      <article>{children}</article>
    </>
  );
}
