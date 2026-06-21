"use client";

import {
  useEffect,
} from "react";

import {
  useRouter,
} from "next/navigation";

import {
  useAuth,
} from "@/components/AuthProvider";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {

  const {
    user,

    loading,
  } = useAuth();

  const router =
    useRouter();

  useEffect(() => {

  if (loading) return;

  if (!user) {

    router.replace("/login");

  }

}, [loading, user, router]);

  if (loading) {

    return (

      <div className="flex min-h-screen items-center justify-center bg-black text-white">

        Loading...

      </div>

    );

  }

  if (!user) {

    return null;

  }

  return <>{children}</>;

}