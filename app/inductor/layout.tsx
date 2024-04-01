
import "./styles.css";

export default function InductorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      
      <article>{children}</article>
    </>
  );
}
