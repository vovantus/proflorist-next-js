import Link from "next/link";

export function Modal({ children }: { children: React.ReactNode }) {
  console.log("modal");
  return (
    <>
      <Link href="/">Close modal</Link>
      <div>{children}</div>
    </>
  );
}
