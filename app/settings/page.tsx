import DashboardLayout from "@/components/layout/DashboardLayout";

import SettingsPanel from "@/components/SettingsPanel";

export default function SettingsPage() {

  return (

    <DashboardLayout>

      <h1 className="mb-10 text-5xl font-bold">

        Settings ⚙️

      </h1>

      <SettingsPanel />

    </DashboardLayout>

  );

}