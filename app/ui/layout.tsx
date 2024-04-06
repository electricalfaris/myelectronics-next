import "@/app/globals.css";
// import SubNav from "./SubNav";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* <SubNav /> */}
import "@/app/globals.css";

      <article>
       
        {children}
      </article>
    </>
  );
}
