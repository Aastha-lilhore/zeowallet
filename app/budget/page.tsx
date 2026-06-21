import DashboardLayout from "@/components/layout/DashboardLayout";
import BudgetPlanner from "@/components/BudgetPlanner";

export default function BudgetPage() {
  return (
    <DashboardLayout>

      <h1 className="mb-10 text-5xl font-bold">

        Budget Planner 📅

      </h1>

      <BudgetPlanner />

    </DashboardLayout>
  );
}