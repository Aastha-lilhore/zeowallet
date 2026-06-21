"use client";

import { useState, useEffect } from "react";

import { signOut } from "firebase/auth";

import { auth } from "@/lib/firebase";

import { useAuth } from "@/components/AuthProvider";

export default function SettingsPanel() {

  const { user } = useAuth();

  const [notifications, setNotifications] =

    useState(true);

  useEffect(() => {

    const saved = localStorage.getItem(

      "notifications"

    );

    if (saved) {

      setNotifications(

        JSON.parse(saved)

      );

    }

  }, []);

  function toggleNotifications() {

    const value = !notifications;

    setNotifications(value);

    localStorage.setItem(

      "notifications",

      JSON.stringify(value)

    );

  }

  async function logout() {

    await signOut(auth);

  }

  function resetLocalData() {

    if (

      !confirm(

        "Delete local app settings?"

      )

    )

      return;

    localStorage.removeItem(

      "notifications"

    );

    alert("Settings reset.");

  }

  return (

    <div className="space-y-8">

      {/* Appearance */}

      <div className="rounded-3xl border border-gray-800 p-8">

        <h2 className="mb-4 text-2xl font-bold">

          🌓 Appearance

        </h2>

        <p className="text-gray-400">

          Dark mode enabled

        </p>

      </div>

      {/* Currency */}

      <div className="rounded-3xl border border-gray-800 p-8">

        <h2 className="mb-4 text-2xl font-bold">

          💱 Currency

        </h2>

        <p className="text-gray-400">

          ₹ Indian Rupee

        </p>

      </div>

      {/* Notifications */}

      <div className="rounded-3xl border border-gray-800 p-8">

        <div className="flex items-center justify-between">

          <h2 className="text-2xl font-bold">

            🔔 Notifications

          </h2>

          <button

            onClick={toggleNotifications}

            className={`rounded-xl px-4 py-2 font-semibold ${
              notifications

                ? "bg-green-500 text-black"

                : "bg-gray-700"
            }`}

          >

            {notifications

              ? "ON"

              : "OFF"}

          </button>

        </div>

      </div>

      {/* Account */}

      <div className="rounded-3xl border border-gray-800 p-8">

        <h2 className="mb-4 text-2xl font-bold">

          👤 Account

        </h2>

        <p className="mb-2 text-gray-300">

          {user?.email}

        </p>

        <p className="break-all text-xs text-gray-500">

          {user?.uid}

        </p>

      </div>

      {/* Danger Zone */}

      <div className="rounded-3xl border border-red-500 p-8">

        <h2 className="mb-6 text-2xl font-bold text-red-400">

          🗑️ Danger Zone

        </h2>

        <div className="flex flex-wrap gap-4">

          <button

            onClick={resetLocalData}

            className="rounded-xl bg-yellow-500 px-4 py-3 font-semibold text-black"

          >

            Reset Settings

          </button>

          <button

            onClick={logout}

            className="rounded-xl bg-red-500 px-4 py-3 font-semibold"

          >

            Logout

          </button>

        </div>

      </div>

    </div>

  );

}