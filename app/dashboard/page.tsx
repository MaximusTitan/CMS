"use client";

import React, { useState, useEffect } from "react";
import { User } from "@supabase/supabase-js";
import { createClient } from "@/utils/supabase/client";
import CompleteProfileForm from "./CompleteProfileForm";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const supabase = createClient();
  const [user, setUser] = useState<User | null>(null);
  const [userData, setUserData] = useState<{
    full_name: string;
    phone: string;
  } | null>(null);
  const [userRole, setUserRole] = useState("user");
  const [userId, setUserId] = useState<string | null>(null);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
      if (user) {
        setUserId(user.id);
        setUserRole(user.user_metadata?.role || "user");
        const { data: userData } = await supabase
          .from("users")
          .select("full_name, phone")
          .eq("id", user.id)
          .single();
        setUserData(userData);
        setFullName(userData?.full_name || "");
        setPhone(userData?.phone || "");
      }
      setIsLoading(false);
    };
    fetchUser();
  }, [supabase]);

  const handleProfileComplete = async () => {
    console.log("Profile completed. Refreshing user data.");
    const { data: userData } = await supabase
      .from("users")
      .select("full_name, phone")
      .eq("id", userId)
      .single();
    setUserData(userData);
    setFullName(userData?.full_name || "");
    setPhone(userData?.phone || "");
  };

  if (isLoading) return <p>Loading...</p>;

  if (!userId) return null;

  if (!fullName || !phone) {
    return (
      <CompleteProfileForm
        userId={userId}
        onProfileComplete={handleProfileComplete}
      />
    );
  }

  return (
    <div>
      <h1>Welcome to the App!</h1>
      <p>
        We are glad to have you here. Explore the features and enjoy your
        experience.
      </p>
      <p>Your role: {userRole}</p>
    </div>
  );
}
