import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import SideBar from "@/components/dashbourd/SideBar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div dir="ltr" className="dark bg-darker">
      <SidebarProvider>
        <SideBar />
        <main className="bg-sidebar-accent w-full">
          <SidebarTrigger className="text-muted-foreground cursor-pointer" />
          {children}
        </main>
      </SidebarProvider>
    </div>
  );
}
