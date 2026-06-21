"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { Expense } from "@/types/expense";

const COLORS = [

  "#06b6d4", // cyan

  "#22c55e", // green

  "#ef4444", // red

  "#f59e0b", // amber

  "#8b5cf6", // violet

  "#ec4899", // pink

];

export default function ExpenseChart({
  expenses,
}: {
  expenses: Expense[];
}) {

  const grouped = expenses.reduce(

    (acc, expense) => {

      const existing = acc.find(

        (item) =>

          item.name === expense.category

      );

      if (existing) {

        existing.value += expense.amount;

      } else {

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

  return (

    <div className="h-80">

      <ResponsiveContainer>

        <PieChart>

          <Pie

            data={grouped}

            dataKey="value"

            nameKey="name"

            outerRadius={100}

            label

            labelLine={false}

          >

            {grouped.map((_, index) => (

  <Cell

    key={index}

    fill={
      COLORS[
        index % COLORS.length
      ]
    }

  />

))}

          </Pie>

          <Tooltip />

        </PieChart>

      </ResponsiveContainer>

    </div>

  );

}