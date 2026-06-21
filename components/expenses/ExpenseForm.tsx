export default function ExpenseForm() {
  return (
    <div className="rounded-3xl border border-gray-800 p-8">

      <h2 className="mb-8 text-3xl font-bold">

        Add Expense

      </h2>

      <div className="space-y-6">

        <input
          type="text"
          placeholder="Expense Name"
          className="w-full rounded-xl border border-gray-700 bg-transparent p-4 outline-none focus:border-cyan-400"
        />

        <input
          type="number"
          placeholder="Amount"
          className="w-full rounded-xl border border-gray-700 bg-transparent p-4 outline-none focus:border-cyan-400"
        />

        <select
          className="w-full rounded-xl border border-gray-700 bg-black p-4 outline-none focus:border-cyan-400"
        >

          <option>Food</option>

          <option>Transport</option>

          <option>Books</option>

          <option>Entertainment</option>

          <option>Other</option>

        </select>

        <button
          className="w-full rounded-xl bg-cyan-400 py-4 font-semibold text-black hover:scale-105 transition"
        >

          Add Expense

        </button>

      </div>

    </div>
  );
}