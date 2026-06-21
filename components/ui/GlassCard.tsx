export default function GlassCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="
      rounded-3xl
      border border-gray-800
      bg-white/5
      backdrop-blur-md
      p-8
      shadow-lg
      transition
      hover:scale-[1.02]
      hover:border-cyan-400
      "
    >
      {children}
    </div>
  );
}