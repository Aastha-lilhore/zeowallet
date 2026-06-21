"use client";

import { useExpenses } from "@/hooks/useExpenses";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const COLORS = [

  "#06b6d4",

  "#22c55e",

  "#ef4444",

  "#f59e0b",

  "#8b5cf6",

];

export default function AnalyticsChart() {

  const expenses = useExpenses();

  const grouped = expenses.reduce(

    (acc, expense) => {

      const existing = acc.find(

        (item) =>

          item.name === expense.category

      );

      if (existing) {

        existing.value += expense.amount;

      }

      else {

        acc.push({

          name: expense.category,

          value: expense.amount,

        });

      }

      return acc;

    },

    [] as {

      name: string;

      value: number;

    }[]

  );

  const totalExpenses = expenses.reduce(

    (sum, expense) =>

      sum + expense.amount,

    0

  );

  const highestCategory =

    grouped.length > 0

      ? grouped.reduce(

          (a, b) =>

            a.value > b.value

              ? a

              : b

        )

      : null;

  return (

    <div className="space-y-10">

      {/* Stats */}

      <div className="grid gap-6 md:grid-cols-2">

        <div className="rounded-3xl border border-gray-800 p-8">

          <p className="text-gray-400">

            Total Expenses

          </p>

          <p className="mt-4 text-4xl font-bold">

            ₹{totalExpenses}

          </p>

        </div>

        <div className="rounded-3xl border border-gray-800 p-8">

          <p className="text-gray-400">

            Highest Category

          </p>

          <p className="mt-4 text-4xl font-bold">

            {highestCategory?.name ?? "N/A"}

          </p>

        </div>

      </div>

      {/* Chart */}

      <div className="rounded-3xl border border-gray-800 p-8">

        <h2 className="mb-8 text-3xl font-bold">

          Expense Analytics 📊

        </h2>

        <div className="h-96">

          <ResponsiveContainer>

            <PieChart>

              <Pie

                data={grouped}

                dataKey="value"

                nameKey="name"

                outerRadius={130}

                label

              >

                {grouped.map(

                  (_, index) => (

                    <Cell

                      key={index}

                      fill={

                        COLORS[

                          index %

                          COLORS.length

                        ]

                      }

                    />

                  )

                )}

              </Pie>

              <Tooltip />

            </PieChart>

          </ResponsiveContainer>

        </div>

      </div>

      {/* Breakdown */}

      <div className="rounded-3xl border border-gray-800 p-8">

        <h2 className="mb-6 text-2xl font-bold">

          Category Breakdown

        </h2>

        <div className="space-y-4">

          {grouped.map((item) => (

            <div

              key={item.name}

              className="flex justify-between border-b border-gray-800 pb-3"

            >

              <p>{item.name}</p>

              <p>

                ₹{item.value}

              </p>

            </div>

          ))}

        </div>

      </div>

    </div>

  );

}