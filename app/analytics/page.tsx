import DashboardLayout from "@/components/layout/DashboardLayout";
import AnalyticsChart from "@/components/charts/AnalyticsChart";

export default function AnalyticsPage() {
  return (
    <DashboardLayout>

      <h1 className="mb-10 text-5xl font-bold">

        Analytics 📊

      </h1>

      <AnalyticsChart />

    </DashboardLayout>
  );
}