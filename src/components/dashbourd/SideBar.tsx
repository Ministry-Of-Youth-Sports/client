"use client";

import { Newspaper } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import LogoutButton from "../auth/LogoutButton";
import { useAuth } from "@/providers/AuthProvider";
import { usePathname } from "next/navigation";
import { roleRoutes } from "../../../routes";

const SideBar = () => {
  const { user } = useAuth();

  const pathName = usePathname();

  const link = ["الاخبار", "الانشطة و البرامج", "مراكز الشباب"];

  const indexRoute = roleRoutes.indexOf(user?.role as string);

  const items = [
    {
      id: 1,
      title: indexRoute === -1 ? "" : link[indexRoute],
      url: `/dashboard-admin/${user?.role}`,
      icon: Newspaper,
      isActive: pathName === `/dashboard-admin/${user?.role}`,
    },
    {
      id: 2,
      title: indexRoute === -1 ? "" : `انشاء ${link[indexRoute]}`,
      url: `/dashboard-admin/${user?.role}/create`,
      icon: Newspaper,
      isActive: pathName === `/dashboard-admin/${user?.role}/create`,
    },
  ];
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-md">
            {user?.email}
          </SidebarGroupLabel>
          <SidebarGroupContent className="mt-2">
            <SidebarMenu className="gap-4">
              {items.map((item) => (
                <SidebarMenuItem
                  className={item.isActive ? "bg-accent rounded-md" : ""}
                  key={item.id}
                >
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <div className="ml-2 absolute bottom-10 left-0">
          <LogoutButton />
        </div>
      </SidebarContent>
    </Sidebar>
  );
};

export default SideBar;
