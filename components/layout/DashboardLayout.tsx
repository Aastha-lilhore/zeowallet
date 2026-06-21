import Sidebar from "@/components/layout/Sidebar";
import MobileMenu from "@/components/layout/MobileMenu";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-black text-white">
<MobileMenu />
      <div className="lg:flex">

        <div className="hidden lg:block">

          <Sidebar />

        </div>

        <div className="flex-1 p-6 lg:p-10">

          {children}

        </div>

      </div>

    </main>
  );
}