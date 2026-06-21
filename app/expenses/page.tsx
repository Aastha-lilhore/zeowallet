import DashboardLayout from "@/components/layout/DashboardLayout";
import ExpenseManager from "@/components/expenses/ExpenseManager";

export default function ExpensesPage() {
  return (
    <DashboardLayout>

      <h1 className="mb-10 text-5xl font-bold">

        Expenses 💸

      </h1>

      <ExpenseManager />

    </DashboardLayout>
  );
}