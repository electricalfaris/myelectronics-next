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
      <article>
        <header className="top-header center red">
          <h1>Transformer</h1>
        </header>

        {children}
      </article>
    </>
  );
}
