export function ColumnContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="container grid grid-cols-1 justify-between gap-8 md:grid-cols-2 md:gap-16 lg:gap-28">
      {children}
    </div>
  );
}
