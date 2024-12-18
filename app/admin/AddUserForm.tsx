"use client";
import { useState } from "react";
import { signUpAction } from "../actions";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export function AddUserForm() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = await signUpAction(new FormData(event.currentTarget));
    if (result?.message) {
      toast("User has been created.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col">
        <label className="mb-1 font-medium" htmlFor="email">
          Email:
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          className="p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="flex flex-col">
        <label className="mb-1 font-medium" htmlFor="password">
          Password:
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            required
            className="p-2 border border-gray-300 rounded w-full"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
      </div>
      <div className="flex flex-col">
        <label className="mb-1 font-medium" htmlFor="role">
          Role:
        </label>
        <select
          name="role"
          id="role"
          required
          className="p-2 border border-gray-300 rounded"
        >
          <option value="user">User</option>
          <option value="delivery_manager">Delivery Manager</option>
          <option value="teacher">Teacher</option>
          <option value="parent">Parent</option>
          <option value="student">Student</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <input type="hidden" name="isAdmin" value="true" />
      <Button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add User
      </Button>
    </form>
  );
}
