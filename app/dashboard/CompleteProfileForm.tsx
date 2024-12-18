"use client";

import React, { useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

interface CompleteProfileFormProps {
  userId: string;
  onProfileComplete: () => void;
}

const CompleteProfileForm: React.FC<CompleteProfileFormProps> = ({
  userId,
  onProfileComplete,
}) => {
  const supabase = createClient();
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [fullNameError, setFullNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    let valid = true;
    setFullNameError("");
    setPhoneError("");

    if (!fullName) {
      setFullNameError("Full Name is required.");
      valid = false;
    }

    if (!phone) {
      setPhoneError("Phone number is required.");
      valid = false;
    }

    if (!valid) {
      setIsSubmitting(false);
      return;
    }

    const { error } = await supabase
      .from("users")
      .update({ full_name: fullName, phone })
      .eq("id", userId);

    if (error) {
      setMessage("Failed to update profile.");
      console.error(error);
    } else {
      setMessage("Profile updated successfully.");
      onProfileComplete();
    }
    setIsSubmitting(false);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Complete Your Profile</h2>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <div>
          <label className="block text-sm font-medium">Full Name</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="input shadcn input-bordered w-full"
            placeholder="Enter your full name"
          />
          {fullNameError && <p className="text-red-500">{fullNameError}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium">Phone</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="input shadcn input-bordered w-full"
            placeholder="Enter your phone number"
          />
          {phoneError && <p className="text-red-500">{phoneError}</p>}
        </div>
        <button
          type="submit"
          className="btn shadcn btn-primary"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
        {message && <p className="mt-2 text-green-500">{message}</p>}
      </form>
    </div>
  );
};

export default CompleteProfileForm;
