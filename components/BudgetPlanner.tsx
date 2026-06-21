"use client";

import { useEffect, useState } from "react";

export default function BudgetPlanner() {
  const [income, setIncome] = useState("");
  const [budget, setBudget] = useState("");

useEffect(() => {

  const savedIncome =
    localStorage.getItem("income");

  const savedBudget =
    localStorage.getItem("budget");

  if (savedIncome) {

    setIncome(savedIncome);

  }

  if (savedBudget) {

    setBudget(savedBudget);

  }

}, []);

useEffect(() => {

  localStorage.setItem(

    "income",

    income
  );

  localStorage.setItem(

    "budget",

    budget
  );

}, [income, budget]);

  const remaining =
    Number(income || 0) - Number(budget || 0);

  return (
    <div className="rounded-3xl border border-gray-800 p-8">

      <h2 className="mb-8 text-3xl font-bold">

        Budget Planner 📅

      </h2>

      <div className="space-y-6">

        <input
          type="number"
          placeholder="Monthly Income"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          className="w-full rounded-xl border border-gray-700 bg-transparent p-4 outline-none focus:border-cyan-400"
        />

        <input
          type="number"
          placeholder="Planned Budget"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          className="w-full rounded-xl border border-gray-700 bg-transparent p-4 outline-none focus:border-cyan-400"
        />

        <div className="rounded-2xl border border-green-500 p-6">

          <p className="text-gray-400">

            Remaining Amount

          </p>

          <p className="mt-4 text-4xl font-bold">

            ₹{remaining}

          </p>

        </div>

      </div>

    </div>
  );
}