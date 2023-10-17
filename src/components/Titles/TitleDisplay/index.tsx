export function TitleDisplay({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="max-ssm:text-4xl bg-gradient-to-b from-white to-zinc-500 bg-clip-text p-2 text-center text-5xl font-black tracking-tighter text-transparent md:text-7xl">
      {children}
    </h2>
  );
}
