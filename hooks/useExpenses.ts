"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

import {
  db,
} from "@/services/firebaseDb";

import {
  useAuth,
} from "@/components/AuthProvider";

import {
  Expense,
} from "@/types/expense";

export function useExpenses() {

  const { user } =
    useAuth();

  const [
    expenses,

    setExpenses,
  ] = useState<
    Expense[]
  >([]);

  useEffect(() => {

    async function fetchData() {

      if (!user) return;

      const q = query(
        collection(
          db,

          "expenses"
        ),

        where(
          "userId",

          "==",

          user.uid
        )
      );

      const snapshot =
        await getDocs(q);

      const data =
        snapshot.docs.map(
          (doc) => ({
            id: doc.id,

            ...doc.data(),
          })
        );

      setExpenses(
        data as Expense[]
      );

    }

    fetchData();

  }, [user]);

  return expenses;

}