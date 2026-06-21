"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { signup } from "@/lib/auth/signup";
export default function SignupPage() {

  const router = useRouter();

  const [fullName, setFullName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleSignup() {

    try {

      setLoading(true);

      await signup(email, password);

      router.push("/dashboard");

    } catch (error: any) {

      alert(error.message);

    } finally {

      setLoading(false);

    }
  }
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <div className="w-full max-w-md rounded-3xl border border-gray-800 p-8">

        <h1 className="mb-8 text-center text-4xl font-bold">

          Create Account

        </h1>

        <input
  type="text"
  placeholder="Full Name"
  value={fullName}
  onChange={(e) => setFullName(e.target.value)}
  className="mb-4 w-full rounded-xl border border-gray-700 bg-transparent p-4 outline-none focus:border-cyan-400"
/>

       <input
  type="email"
  placeholder="Email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="mb-4 w-full rounded-xl border border-gray-700 bg-transparent p-4 outline-none focus:border-cyan-400"
/>

        <input
  type="password"
  placeholder="Password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  className="mb-6 w-full rounded-xl border border-gray-700 bg-transparent p-4 outline-none focus:border-cyan-400"
/>

        <button
  onClick={handleSignup}
  disabled={loading}
  className="w-full rounded-xl bg-cyan-400 py-4 font-semibold text-black hover:scale-105 transition disabled:opacity-50"
>

  {loading ? "Creating..." : "Create Account"}

</button>

      </div>

    </main>
  );
}