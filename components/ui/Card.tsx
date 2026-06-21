type CardProps = {
  children: React.ReactNode;
};

export default function Card({
  children,
}: CardProps) {
  return (
    <div className="rounded-3xl border border-gray-800 bg-black/70 p-8 backdrop-blur-md">

      {children}

    </div>
  );
}