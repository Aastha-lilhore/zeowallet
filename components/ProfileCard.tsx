"use client";

import { signOut } from "firebase/auth";

import { auth } from "@/lib/firebase";

import { useAuth } from "@/components/AuthProvider";

export default function ProfileCard() {

  const { user } = useAuth();

  async function handleLogout() {

    await signOut(auth);

  }

  return (

    <div className="rounded-3xl border border-gray-800 p-8">

      <div className="flex flex-col items-center">

        <div className="mb-6 flex h-28 w-28 items-center justify-center rounded-full border border-cyan-400 text-5xl">

          👤

        </div>

        <h2 className="text-3xl font-bold">

          {user?.displayName || "ZeoWallet User"}

        </h2>

        <p className="mt-2 text-gray-400">

          {user?.email}

        </p>

        <p className="mt-4 text-sm text-gray-500">

          UID

        </p>

        <p className="mb-8 break-all text-center text-xs text-gray-400">

          {user?.uid}

        </p>

        <button

          onClick={handleLogout}

          className="rounded-xl bg-red-500 px-6 py-3 font-semibold text-white hover:opacity-90"

        >

          Logout

        </button>

      </div>

    </div>

  );

}