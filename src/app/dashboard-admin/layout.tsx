import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import SideBar from "@/components/dashbourd/SideBar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div dir="ltr" className="dark">
      <SidebarProvider>
        <SideBar />
        <main className="bg-sidebar-accent w-full">
          <SidebarTrigger className="bg-sidebar-accent text-muted-foreground" />
          {children}
        </main>
      </SidebarProvider>
    </div>
  );
}
