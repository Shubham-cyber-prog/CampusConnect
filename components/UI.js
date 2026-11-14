export function PageHeader({ eyebrow, title, description, action }) {
  return (
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        {eyebrow && <p className="mb-2 text-xs font-bold uppercase tracking-widest text-blue-600">{eyebrow}</p>}
        <h1 className="text-3xl font-bold tracking-tight text-slate-950">{title}</h1>
        {description && <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">{description}</p>}
      </div>
      {action}
    </div>
  );
}

export function Card({ children, className = "" }) {
  return <section className={`rounded-2xl border border-slate-200 bg-white p-5 shadow-sm ${className}`}>{children}</section>;
}

export function StatCard({ label, value, detail, accent = "blue" }) {
  const accents = {
    blue: "bg-blue-50 text-blue-700",
    green: "bg-emerald-50 text-emerald-700",
    amber: "bg-amber-50 text-amber-700",
    violet: "bg-violet-50 text-violet-700",
  };

  return (
    <Card>
      <div className={`mb-5 flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold ${accents[accent]}`}>
        {label.slice(0, 1)}
      </div>
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-1 text-3xl font-bold text-slate-950">{value}</p>
      <p className="mt-2 text-xs font-medium text-slate-400">{detail}</p>
    </Card>
  );
}

export function StatusBadge({ status }) {
  const styles = {
    Pending: "bg-amber-50 text-amber-700",
    Submitted: "bg-blue-50 text-blue-700",
    Completed: "bg-emerald-50 text-emerald-700",
    High: "bg-rose-50 text-rose-700",
    Medium: "bg-amber-50 text-amber-700",
    Low: "bg-slate-100 text-slate-600",
  };

  return <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${styles[status] || "bg-slate-100 text-slate-600"}`}>{status}</span>;
}

export function ProgressBar({ value }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
        <div className="h-full rounded-full bg-blue-600" style={{ width: `${value}%` }} />
      </div>
      <span className="w-10 text-right text-xs font-bold text-slate-600">{value}%</span>
    </div>
  );
}

export function Avatar({ name, large = false }) {
  const initials = name.split(" ").map((part) => part[0]).join("").slice(0, 2);
  return <div className={`flex shrink-0 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700 ${large ? "h-20 w-20 text-xl" : "h-10 w-10 text-xs"}`}>{initials}</div>;
}