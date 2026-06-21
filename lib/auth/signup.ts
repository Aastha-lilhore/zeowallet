import { auth } from "@/lib/firebase";

import { createUserWithEmailAndPassword } from "firebase/auth";

export async function signup(
  email: string,
  password: string
) {
  return await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
}