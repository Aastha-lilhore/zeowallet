type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export default function Button({
  children,
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-black transition hover:scale-105"
    >

      {children}

    </button>
  );
}