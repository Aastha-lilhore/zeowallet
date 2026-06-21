"use client";

import { useRouter } from "next/navigation";

import { logout } from "@/lib/auth/logout";
import Link from "next/link";

export default function Sidebar() {
  const router = useRouter();

async function handleLogout() {

  await logout();

  router.push("/login");

}
  return (
<aside className="sticky top-0 h-screen w-72 border-r border-gray-800 bg-black/90 backdrop-blur-xl p-8">

      <h1 className="mb-12 text-3xl font-bold">

        Zeo<span className="text-cyan-400">Wallet</span>

      </h1>

      <div className="space-y-3 text-lg">

        <Link href="/dashboard">
          <div className="cursor-pointer rounded-xl px-3 py-2 transition duration-300 hover:bg-cyan-500/10 hover:text-cyan-400">
            🏠 Dashboard
          </div>
        </Link>

        <Link href="/expenses">
          <div className="cursor-pointer rounded-xl px-3 py-2 transition duration-300 hover:bg-cyan-500/10 hover:text-cyan-400">
            💸 Expenses
          </div>
        </Link>

        <Link href="/savings">
          <div className="cursor-pointer rounded-xl px-3 py-2 transition duration-300 hover:bg-cyan-500/10 hover:text-cyan-400">
            🎯 Savings Goals
          </div>
        </Link>

        <Link href="/budget">
          <div className="cursor-pointer rounded-xl px-3 py-2 transition duration-300 hover:bg-cyan-500/10 hover:text-cyan-400">
            📅 Budget Planner
          </div>
        </Link>

        <Link href="/analytics">
          <div className="cursor-pointer rounded-xl px-3 py-2 transition duration-300 hover:bg-cyan-500/10 hover:text-cyan-400">
            📊 Analytics
          </div>
        </Link>

        <Link href="/profile">
          <div className="cursor-pointer rounded-xl px-3 py-2 transition duration-300 hover:bg-cyan-500/10 hover:text-cyan-400">
            👤 Profile
          </div>
        </Link>

        <Link href="/settings">
          <div className="cursor-pointer rounded-xl px-3 py-2 transition duration-300 hover:bg-cyan-500/10 hover:text-cyan-400">
            ⚙️ Settings
          </div>
        </Link>

        <button
  onClick={handleLogout}
  className="mt-10 w-full rounded-xl border border-red-500 py-3 text-red-400 transition hover:bg-red-500 hover:text-white"
>

  Logout

</button>

      </div>

    </aside>
  );
}