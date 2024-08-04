export function Modal({ children }: { children: React.ReactNode }) {
  console.log("modal");
  return (
    <>
      <div>{children}</div>
    </>
  );
}
