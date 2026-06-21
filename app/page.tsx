import Link from "next/link";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Background Glow */}
      <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-cyan-500 blur-[120px] opacity-20"></div>

      <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-green-500 blur-[120px] opacity-20"></div>

      <Navbar />

      <section className="flex flex-col items-center justify-center px-6 py-24 text-center">

        <h2 className="text-5xl md:text-7xl font-bold">
          Track Smart.
          <br />
          Spend Better.
        </h2>

        <p className="mt-6 max-w-xl text-lg text-gray-400">
          Built for students to manage expenses, budgets and savings effortlessly.
        </p>

        <Link href="/signup">

  <button className="mt-10 rounded-full bg-cyan-400 px-8 py-4 font-semibold text-black hover:scale-105 transition">

    Get Started

  </button>

</Link>

      </section>

    </main>
  );
}
