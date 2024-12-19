"use client";

import React from "react";
import { createClient } from "@/utils/supabase/client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface User {
  id: string;
  role: string;
  email: string;
  phone: string | null;
  created_at: string;
  full_name: string;
}

export default function AdminDeliveryManagers() {
  const supabase = createClient();
  const [users, setUsers] = React.useState<User[]>([]);

  React.useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("role", "delivery_manager");
      if (error) {
        console.error("error", error);
      } else {
        setUsers(data || []);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5">Delivery Managers</h1>
      <div className="overflow-x-auto">
        <Table>
          <TableCaption>List of all delivery managers</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Full Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Created At</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.full_name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone || "N/A"}</TableCell>
                <TableCell>
                  {new Date(user.created_at).toLocaleDateString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
