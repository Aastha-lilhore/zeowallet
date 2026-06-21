import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6">
      <h1 className="text-3xl font-bold">
        Zeo<span className="text-cyan-400">Wallet</span>
      </h1>

      <div className="space-x-4">
       <div className="space-x-4">

  <Link href="/login">

    <button className="rounded-full border border-cyan-400 px-5 py-2 hover:bg-cyan-400 hover:text-black transition">

      Login

    </button>

  </Link>

  <Link href="/signup">

    <button className="rounded-full bg-cyan-400 px-5 py-2 text-black font-semibold hover:scale-105 transition">

      Sign Up

    </button>

  </Link>

</div>

        
      </div>
    </nav>
  );
}