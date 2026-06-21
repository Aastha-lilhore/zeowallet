"use client";

import { useAuth } from "@/components/AuthProvider";
import { updateDoc } from "firebase/firestore";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  deleteDoc,
  doc,
} from "firebase/firestore";

import { db } from "@/services/firebaseDb";

import { useEffect, useState } from "react";

type Goal = {
 id: string | number;
  name: string;
  target: number;
  saved: number;
};


export default function SavingsTracker() {

  const [goalName, setGoalName] = useState("");

  const [target, setTarget] = useState("");

  const [saved, setSaved] = useState("");

  const [goals, setGoals] = useState<Goal[]>([]);

  const { user } = useAuth();

 useEffect(() => {

  async function fetchGoals() {

    if (!user) return;

    const q = query(

      collection(db, "goals"),

      where(

        "userId",

        "==",

        user.uid

      )

    );

    const snapshot = await getDocs(q);

    const data = snapshot.docs.map(

      (doc) => ({

        id: doc.id,

        ...doc.data(),

      })

    );

    setGoals(data as Goal[]);

  }

  fetchGoals();

}, [user]);

  async function addGoal() {

if (!goalName || !target || !saved) return;

    if (!user) return;

await addDoc(

  collection(db, "goals"),

  {

    userId: user.uid,

    name: goalName,

    target: Number(target),

    saved: Number(saved),

  }

);

setGoalName("");

setTarget("");

setSaved("");

window.location.reload();
  }

 async function deleteGoal(

  id: string | number

) {

  await deleteDoc(

    doc(

      db,

      "goals",

      String(id)

    )

  );

  setGoals(

    goals.filter(

      (goal) =>

        goal.id !== id

    )

  );

}

  async function addMoney(
  id: string | number
) {

  const amount = prompt(

    "Enter amount to add"

  );

  if (!amount) return;

  const goal = goals.find(

    (g) => g.id === id

  );

  if (!goal) return;

  const newAmount =

    goal.saved + Number(amount);

  await updateDoc(

    doc(

      db,

      "goals",

      String(id)

    ),

    {

      saved: newAmount,

    }

  );

  setGoals(

    goals.map(

      (goal) =>

        goal.id === id

          ? {

              ...goal,

              saved: newAmount,

            }

          : goal

    )

  );

}

  return (

    <div className="space-y-10">

      {/* Add Goal */}

      <div className="rounded-3xl border border-gray-800 p-8">

        <h2 className="mb-8 text-3xl font-bold">

          Add Savings Goal

        </h2>

        <div className="space-y-4">

          <input
            type="text"
            placeholder="Goal Name"
            value={goalName}
            onChange={(e) =>
              setGoalName(e.target.value)
            }
            className="w-full rounded-xl border border-gray-700 bg-transparent p-4 outline-none focus:border-cyan-400"
          />

          <input
            type="number"
            placeholder="Target Amount"
            value={target}
            onChange={(e) =>
              setTarget(e.target.value)
            }
            className="w-full rounded-xl border border-gray-700 bg-transparent p-4 outline-none focus:border-cyan-400"
          />

          <input
            type="number"
            placeholder="Current Savings"
            value={saved}
            onChange={(e) =>
              setSaved(e.target.value)
            }
            className="w-full rounded-xl border border-gray-700 bg-transparent p-4 outline-none focus:border-cyan-400"
          />

          <button
            onClick={addGoal}
            className="w-full rounded-xl bg-cyan-400 py-4 font-semibold text-black hover:scale-105 transition"
          >

            Add Goal

          </button>

        </div>

      </div>

      {/* Goals */}

      <div className="space-y-6">

        {goals.length === 0 ? (

          <p className="text-gray-500">

            🎯 No savings goals yet.

          </p>

        ) : (

          goals.map((goal) => {

            const progress = Math.min(
              (goal.saved / goal.target) * 100,

              100
            );

            return (

              <div
                key={goal.id}
                className="rounded-3xl border border-gray-800 p-8"
              >

                <div className="mb-6 flex items-center justify-between">

                  <h3 className="text-2xl font-bold">

                    {goal.name}

                  </h3>

<div className="mb-6 flex gap-4">

  <button

    onClick={() => addMoney(goal.id)}

    className="rounded-xl bg-green-500 px-4 py-2 font-semibold text-black"

  >

    + Add Savings

  </button>

</div>

                  <button
                    onClick={() =>
                      deleteGoal(goal.id)
                    }
                    className="text-red-400 hover:text-red-500"
                  >

                    ✖

                  </button>

                </div>

                <p className="mb-2">

                  ₹{goal.saved} / ₹{goal.target}

                </p>

                <div className="mb-2 flex justify-between">

                  <p>Progress</p>

                  <p>

                    {Math.round(progress)}%

                  </p>

                </div>

                <div className="h-4 overflow-hidden rounded-full bg-gray-800">

                  <div
                    className="h-4 rounded-full bg-green-400"
                    style={{
                      width: `${progress}%`,
                    }}
                  />

                </div>

              </div>

            );

          })

        )}

      </div>

    </div>

  );
} 