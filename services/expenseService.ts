import {
  collection,
  addDoc,
  getDocs,
} from "firebase/firestore";

import {
  db,
} from "@/services/firebaseDb";

import {
  Expense,
} from "@/types/expense";

const expenseCollection =
  collection(
    db,

    "expenses"
  );

export async function saveExpense(
  expense: Expense
) {

  await addDoc(
    expenseCollection,

    expense
  );

}

export async function loadExpenses() {

  const snapshot =
    await getDocs(
      expenseCollection
    );

  return snapshot.docs.map(
    (doc) => ({
      id: doc.id,

      ...doc.data(),
    }));

}