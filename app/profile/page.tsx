import DashboardLayout from "@/components/layout/DashboardLayout";
import ProfileCard from "@/components/ProfileCard";

export default function ProfilePage() {
  return (
    <DashboardLayout>

      <h1 className="mb-10 text-5xl font-bold">

        Profile 👤

      </h1>

      <ProfileCard />

    </DashboardLayout>
  );
}