"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import StatCard from "@/components/ui/StatCard";
import ProtectedRoute from "@/components/ProtectedRoute";

import { useExpenses } from "@/hooks/useExpenses";
import { calculateStats } from "@/utils/dashboardStats";
import ExpenseChart from "@/components/charts/ExpenseChart";
import { useEffect, useState } from "react";


export default function Dashboard() {

  const expenses = useExpenses();

  const [budgetValue, setBudgetValue] = useState(0);

useEffect(() => {

  const savedBudget =

    localStorage.getItem("budget");

  if (savedBudget) {

    setBudgetValue(

      Number(savedBudget)

    );

  }

}, []);

  const {

  budget,

  totalExpenses,

  savings,

} = calculateStats(

  expenses,

  budgetValue

);

  return (

    <ProtectedRoute>

      <DashboardLayout>

        <div className="flex-1 p-10">

          {/* Welcome */}

          <div className="mb-10">

            <p className="mb-2 text-cyan-400">

              ZeoWallet Dashboard

            </p>

            <h1 className="mb-2 text-5xl font-bold">

              Welcome back 👋

            </h1>

            <p className="mb-2 text-lg text-cyan-400">

              Your financial companion.

            </p>

            <p className="mb-10 text-gray-400">

              Track spending, build savings and achieve goals effortlessly.

            </p>

            <div className="mb-10 rounded-3xl border border-cyan-500/30 bg-cyan-500/10 p-6">

              <h2 className="text-2xl font-bold">

                🚀 Smart Tip

              </h2>

              <p className="mt-3 text-gray-300">

                Try to save at least 20% of your monthly budget.

              </p>

            </div>

          </div>

          {/* Stats */}

          <div className="grid gap-8 md:grid-cols-3 mb-10">

            <StatCard
              title="Monthly Budget"
              amount={`₹${budget}`}
              borderColor="border-cyan-500"
            />

            <StatCard
              title="Expenses"
              amount={`₹${totalExpenses}`}
              borderColor="border-red-500"
            />

            <StatCard
              title="Savings"
              amount={`₹${savings}`}
              borderColor="border-green-500"
            />

          </div>

          {/* Chart */}

          <div className="mb-10 rounded-3xl border border-gray-800 p-8">

            <h2 className="mb-6 text-2xl font-bold">

              📊 Expense Chart

            </h2>

            <ExpenseChart
  expenses={expenses}
/>

          </div>

          {/* Transactions */}

          <div className="rounded-3xl border border-gray-800 p-8">

            <h2 className="mb-6 text-2xl font-bold">

              🧾 Recent Transactions

            </h2>

            {expenses.length === 0 ? (

              <p className="text-gray-500">

                No transactions yet.

              </p>

            ) : (

              <div className="space-y-4">

                {expenses.slice(0, 5).map((expense) => (

                  <div
                    key={expense.id}
                    className="flex justify-between border-b border-gray-800 pb-3"
                  >

                    <div>

                      <p>{expense.name}</p>

                      <p className="text-sm text-gray-500">

                        {expense.category}

                      </p>

                    </div>

                    <p>

                      ₹{expense.amount}

                    </p>

                  </div>

                ))}

              </div>

            )}

          </div>

        </div>

      </DashboardLayout>

    </ProtectedRoute>

  );
}