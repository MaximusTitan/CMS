import { signUpAction } from "../actions";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { AddUserForm } from "./AddUserForm";

export default async function AdminDashboard() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user || user.user_metadata.role !== "admin") {
    return redirect("/sign-in");
  }

  return (
    <div className="container mx-auto p-4 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      <AddUserForm />
    </div>
  );
}
