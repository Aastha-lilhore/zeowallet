"use client";
import { useAuth } from "@/components/AuthProvider";

import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  deleteDoc,
  doc,
} from "firebase/firestore";

import { db } from "@/services/firebaseDb";


import { useEffect, useState } from "react";
import { Expense } from "@/types/expense";



export default function ExpenseManager() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");

  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [search, setSearch] = useState("");
  const { user } = useAuth();

  useEffect(() => {

  async function fetchExpenses() {

    if (!user) return;

    const q = query(
      collection(db, "expenses"),
      where("userId", "==", user.uid)
    );

    const snapshot = await getDocs(q);

    const data = snapshot.docs.map((doc) => ({
      id: doc.id,

      ...doc.data(),
    }));

    setExpenses(data as Expense[]);
  }

  fetchExpenses();

}, [user]);

useEffect(() => {
  localStorage.setItem(
    "expenses",
    JSON.stringify(expenses)
  );
}, [expenses]);

  async function addExpense() {
    if (!name || !amount) return;

    if (!user) return;

const docRef = await addDoc(
  collection(db, "expenses"),

  {
    userId: user.uid,

    name,

    amount: Number(amount),

    category,
  }
);

setExpenses([
  ...expenses,

  {
    id: docRef.id,

    name,

    amount: Number(amount),

    category,
  },
]);



    setName("");
    setAmount("");
    setCategory("Food");
  }
async function deleteExpense(
  id: string | number
) {
  try {

    if (typeof id === "string") {

      await deleteDoc(
        doc(db, "expenses", id)
      );

    }

    setExpenses(
      expenses.filter(
        (expense) => expense.id !== id
      )
    );

  } catch (error) {

    console.log(error);

  }
}
const filteredExpenses = expenses.filter((expense) =>
  expense.name
    .toLowerCase()
    .includes(search.toLowerCase())
);
  return (
    <>
      <div className="rounded-3xl border border-gray-800 p-8">

        <h2 className="mb-8 text-3xl font-bold">
          Add Expense
        </h2>

        <div className="space-y-6">

          <input
            type="text"
            placeholder="Expense Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl border border-gray-700 bg-transparent p-4 outline-none focus:border-cyan-400"
          />

          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full rounded-xl border border-gray-700 bg-transparent p-4 outline-none focus:border-cyan-400"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-xl border border-gray-700 bg-black p-4 outline-none focus:border-cyan-400"
          >

            <option>Food</option>
            <option>Transport</option>
            <option>Books</option>
            <option>Entertainment</option>
            <option>Other</option>

          </select>

          <button
            onClick={addExpense}
            className="w-full rounded-xl bg-cyan-400 py-4 font-semibold text-black hover:scale-105 transition"
          >

            Add Expense

          </button>

        </div>

      </div>

      <div className="mt-10 rounded-3xl border border-gray-800 p-8">

        <h2 className="mb-6 text-3xl font-bold">

          Recent Expenses

        </h2>
<input
  type="text"
  placeholder="Search expenses..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="mb-6 w-full rounded-xl border border-gray-700 bg-transparent p-4 outline-none focus:border-cyan-400"
/>
        {expenses.length === 0 ? (

          <p className="text-gray-500">

            📭 No expenses added yet.

Start tracking your spending today.

          </p>

        ) : (

          <div className="space-y-4">

            {filteredExpenses.map((expense) => (

              <div
                key={expense.id}
                className="flex justify-between border-b border-gray-800 pb-3"
              >

                <div>

                  <p>{expense.name}</p>

                  <p className="text-gray-500 text-sm">

                    {expense.category}

                  </p>

                </div>

                <div className="flex items-center gap-4">

  <p>

    ₹{expense.amount}

  </p>

  <button
    onClick={() => deleteExpense(expense.id)}
    className="text-red-400 hover:text-red-500"
  >

    ✖

  </button>

</div>

              </div>

            ))}

          </div>

        )}

      </div>
    </>
  );
}