import type { ReactNode } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { AppHeader } from "./AppHeader";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <div className="flex min-w-0 flex-1 flex-col">
          <AppHeader />
          <main className="min-w-0 flex-1 px-4 pb-10 pt-5 md:px-6">{children}</main>
          <footer className="flex flex-wrap items-center justify-between gap-2 border-t border-border/70 px-6 py-3 text-xs text-muted-foreground">
            <span className="font-display font-semibold tracking-tight text-foreground">
              DODRI CORE
            </span>
            <span className="italic">Build your ecosystem, module by module.</span>
            <span className="label-tech">All systems operational</span>
          </footer>
        </div>
      </div>
    </SidebarProvider>
  );
}
