type StatCardProps = {
  title: string;
  amount: string;
  borderColor: string;
};

export default function StatCard({
  title,
  amount,
  borderColor,
}: StatCardProps) {
  return (
    <div
      className={`rounded-3xl border ${borderColor} bg-black/60 p-8 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:shadow-lg`}
    >

      <p className="text-gray-400">

        {title}

      </p>

      <h2 className="mt-4 text-4xl font-bold">

        {amount}

      </h2>

    </div>
  );
}