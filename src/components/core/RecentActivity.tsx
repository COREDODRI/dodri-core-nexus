import { Activity, Boxes, Cable, KeyRound, Settings, ShieldCheck, UserPlus, LogIn } from "lucide-react";
import { StatusBadge } from "@/components/common/StatusBadge";

export type ActivityRow = {
  id: string;
  action: string;
  description: string | null;
  actor_label: string | null;
  status: string;
  created_at: string;
};

function iconFor(action: string) {
  if (action.startsWith("user.login")) return LogIn;
  if (action.startsWith("user")) return UserPlus;
  if (action.startsWith("role")) return ShieldCheck;
  if (action.startsWith("permission")) return KeyRound;
  if (action.startsWith("module")) return Boxes;
  if (action.startsWith("connection")) return Cable;
  if (action.startsWith("setting") || action.startsWith("system")) return Settings;
  return Activity;
}

export function RecentActivity({ rows, dense = false }: { rows: ActivityRow[]; dense?: boolean }) {
  return (
    <section className="panel p-4">
      <div className="label-tech mb-3">Recent Activity</div>
      {rows.length === 0 && <p className="text-sm text-muted-foreground">No activity recorded yet.</p>}
      <ul className="divide-y divide-border/60">
        {rows.slice(0, dense ? 6 : rows.length).map((row) => {
          const Icon = iconFor(row.action);
          return (
            <li key={row.id} className="flex items-center gap-3 py-2.5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
                <Icon className="h-4 w-4" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="truncate text-sm font-medium">{row.description ?? row.action}</div>
                <div className="text-xs text-muted-foreground">
                  {row.actor_label ?? "System"} • {new Date(row.created_at).toLocaleString()}
                </div>
              </div>
              <StatusBadge label={row.status} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
