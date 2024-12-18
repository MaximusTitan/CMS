"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client"; // Supabase client import
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  BookOpen,
  ChevronsUpDown,
  LogOut,
  GraduationCap,
  Users,
  LibraryBig,
  BookMinus,
  LayoutDashboard,
  UserRoundCog,
  UserSquare,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ThemeSwitcher } from "./theme-switcher";
import { signOutAction } from "@/app/actions";
import logo from "@/public/logo.webp";
import logofull from "@/public/logofull.webp";

const navData = {
  navMain: [
    {
      title: "Dashboard",
      url: "/tools",
      icon: LayoutDashboard,
      isActive: true,
    },
    {
      title: "Delivery Managers",
      url: "/admin/delivery_managers",
      icon: UserRoundCog,
    },
    { title: "Teachers", url: "/admin/teachers", icon: BookOpen },
    { title: "Parents", url: "/admin/parents", icon: UserSquare },
    { title: "Students", url: "/admin/students", icon: GraduationCap },
    { title: "Courses", url: "/admin/courses", icon: LibraryBig },
    { title: "Batches", url: "/admin/batches", icon: Users },
    { title: "Sessions", url: "/admin/sessions", icon: BookMinus },
  ],
};

export function AppSidebar() {
  const { state } = useSidebar();
  const [userEmail, setUserEmail] = useState("guest@example.com"); // Default email

  // Fetch the user session from Supabase
  useEffect(() => {
    const fetchUser = async () => {
      const supabase = createClient(); // Initialize Supabase client
      const {
        data: { user },
      } = await supabase.auth.getUser(); // Get user session

      if (user) {
        setUserEmail(user.email ?? "guest@example.com"); // Set email from the user session
      }
    };

    fetchUser();
  }, []);

  return (
    <Sidebar collapsible="icon">
      {/* Sidebar Header with Logo */}
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Image
                  src={state === "expanded" ? logofull : logo}
                  alt="AI Ready School"
                  width={state === "expanded" ? 250 : 110}
                  height={110}
                />
              </DropdownMenuTrigger>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarSeparator />

      {/* Main Navigation Links */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {navData.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton tooltip={item.title} asChild>
                  <Link href={item.url}>
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      {/* User Avatar and Dropdown Menu in Sidebar Footer */}
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className="data-[state=open]:bg-sidebar-accent"
                >
                  <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarFallback className="rounded-lg">
                      {userEmail.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate text-xs font-semibold">
                      {userEmail}
                    </span>
                  </div>
                  <ChevronsUpDown className="ml-auto size-4" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>

              {/* Dropdown Menu Content */}
              <DropdownMenuContent
                side="bottom"
                align="end"
                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
              >
                <DropdownMenuLabel className="p-0 font-normal">
                  <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    <Avatar className="h-8 w-8 rounded-lg">
                      <AvatarImage
                        src="/default-avatar.png"
                        alt="User Avatar"
                      />
                      <AvatarFallback className="rounded-lg">
                        {userEmail.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate text-xs font-semibold">
                        {userEmail}
                      </span>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <form
                    onSubmit={async (e) => {
                      e.preventDefault();
                      await signOutAction();
                    }}
                    className="w-full"
                  >
                    <button type="submit" className="flex w-full items-center">
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Sign out</span>
                    </button>
                  </form>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}

// Sidebar Header Component with Theme Switcher
export function AppSidebarHeader() {
  return (
    <SidebarInset>
      <header className="flex h-16 shrink-0 px-4 items-center justify-between gap-2 border-b">
        <SidebarTrigger className="-ml-1" />
        <ThemeSwitcher />
      </header>
    </SidebarInset>
  );
}
