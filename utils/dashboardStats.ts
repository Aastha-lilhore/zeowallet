import { Expense } from "@/types/expense";

export function calculateStats(
  expenses: Expense[],

  budget: number
) {

  const totalExpenses = expenses.reduce(

    (sum, expense) =>

      sum + expense.amount,

    0

  );

  const savings = budget - totalExpenses;

  return {

    budget,

    totalExpenses,

    savings,

  };

}