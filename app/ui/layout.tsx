import "@/app/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function UiLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
  );
}
