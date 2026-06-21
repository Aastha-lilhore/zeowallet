import DashboardLayout from "@/components/layout/DashboardLayout";
import SavingsTracker from "@/components/SavingsTracker";

export default function SavingsPage() {
  return (
    <DashboardLayout>

      <h1 className="mb-10 text-5xl font-bold">

        Savings Goals 🎯

      </h1>

      <SavingsTracker />

    </DashboardLayout>
  );
}