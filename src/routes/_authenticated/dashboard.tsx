import { createFileRoute } from "@tanstack/react-router";
import { Activity, Boxes, Cable, HeartPulse, Users } from "lucide-react";
import { EnergyCore } from "@/components/core/EnergyCore";
import { CoreStatusPanel, type ServiceStatus } from "@/components/core/CoreStatusPanel";
import { MetricCards, type Metric } from "@/components/core/MetricCards";
import { RecentActivity, type ActivityRow } from "@/components/core/RecentActivity";
import { PageHeader } from "@/components/common/PageHeader";
import { useActivityLogs, useConnections, useModules, useUsers } from "@/hooks/useCore";

export const Route = createFileRoute("/_authenticated/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — DODRI Platform Core" },
      { name: "description", content: "Live view of the DODRI Core: modules, connections and system health." },
      { property: "og:title", content: "Dashboard — DODRI Platform Core" },
      { property: "og:description", content: "Live view of the DODRI Core." },
    ],
  }),
  component: DashboardPage,
});

function DashboardPage() {
  const modules = useModules();
  const connections = useConnections();
  const users = useUsers();
  const logs = useActivityLogs(12);

  const moduleRows = modules.data ?? [];
  const connectionRows = connections.data ?? [];
  const userRows = users.data ?? [];

  const activeModules = moduleRows.filter((m) => m.enabled && m.status === "active").length;
  const activeConnections = connectionRows.filter((c) => c.status === "active").length;
  const errored = connectionRows.some((c) => c.status === "error");

  const metrics: Metric[] = [
    { label: "Total Users", value: userRows.length, icon: Users },
    {
      label: "Active Users",
      value: userRows.filter((u) => u.status === "active").length,
      icon: Activity,
    },
    { label: "Active Modules", value: activeModules, icon: Boxes, hint: `${moduleRows.length} registered` },
    { label: "Connections", value: activeConnections, icon: Cable, hint: `${connectionRows.length} total` },
    {
      label: "System Health",
      value: errored ? "Degraded" : "Optimal",
      icon: HeartPulse,
    },
  ];

  const services: ServiceStatus[] = [
    { label: "Core Services", value: "Online", tone: "success" },
    { label: "Database", value: modules.isError ? "Error" : "Online", tone: modules.isError ? "error" : "success" },
    { label: "Authentication", value: "Online", tone: "success" },
    { label: "Module Registry", value: moduleRows.length ? "Online" : "Inactive", tone: moduleRows.length ? "success" : "idle" },
    {
      label: "Connections",
      value: errored ? "Error" : activeConnections ? "Online" : "Inactive",
      tone: errored ? "error" : activeConnections ? "success" : "idle",
    },
    { label: "System", value: errored ? "Warning" : "Optimal", tone: errored ? "warning" : "success" },
  ];

  return (
    <div>
      <PageHeader
        eyebrow="Core"
        title="Command Center"
        description="The DODRI Core orchestrates authentication, users, modules and connections."
      />

      <MetricCards metrics={metrics} />

      <div className="mt-4 grid gap-4 xl:grid-cols-[1fr_320px]">
        <EnergyCore modules={moduleRows} connections={connectionRows} />
        <div className="space-y-4">
          <CoreStatusPanel services={services} />
          <RecentActivity rows={(logs.data ?? []) as ActivityRow[]} dense />
        </div>
      </div>
    </div>
  );
}
