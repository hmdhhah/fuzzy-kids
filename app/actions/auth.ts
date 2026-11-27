"use server";

import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  const email = String(formData.get("email") ?? "");
  const password = String(formData.get("password") ?? "");

  // Replace with your auth provider's server-side sign-in call.
  const authenticated = await authenticateWithProvider(email, password);

  if (!authenticated) {
    redirect("/login?error=invalid-credentials");
  }

  redirect("/admin");
}

async function authenticateWithProvider(
  email: string,
  password: string,
): Promise<boolean> {
  // TODO: Call your auth provider here.
  // Do not compare against credentials hard-coded in this file.
  void email;
  void password;
  return false;
}