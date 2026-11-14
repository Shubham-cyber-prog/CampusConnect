"use client";

import { useState } from "react";
import { Card, PageHeader } from "../../../components/UI";

function Toggle({ enabled, onClick }) {
  return <button onClick={onClick} aria-label="Toggle setting" className={`relative h-6 w-11 rounded-full transition ${enabled ? "bg-blue-600" : "bg-slate-200"}`}><span className={`absolute top-1 h-4 w-4 rounded-full bg-white transition ${enabled ? "left-6" : "left-1"}`} /></button>;
}

export default function SettingsPage() {
  const [emailUpdates, setEmailUpdates] = useState(true);
  const [deadlineAlerts, setDeadlineAlerts] = useState(true);
  return <><PageHeader eyebrow="Preferences" title="Settings" description="Control your notifications and portal preferences." /><div className="max-w-3xl space-y-6"><Card><h2 className="font-bold text-slate-950">Notifications</h2><p className="mt-1 text-sm text-slate-500">Choose what updates you want to receive.</p><div className="mt-6 divide-y divide-slate-100">{[["Email updates", "Receive weekly academic summaries", emailUpdates, () => setEmailUpdates(!emailUpdates)], ["Deadline alerts", "Get notified before assignments are due", deadlineAlerts, () => setDeadlineAlerts(!deadlineAlerts)]].map(([label, description, enabled, onClick]) => <div key={label} className="flex items-center justify-between gap-4 py-5"><div><p className="font-semibold text-slate-800">{label}</p><p className="mt-1 text-sm text-slate-500">{description}</p></div><Toggle enabled={enabled} onClick={onClick} /></div>)}</div></Card><Card><h2 className="font-bold text-slate-950">Appearance</h2><p className="mt-1 text-sm text-slate-500">Personalize the way CampusConnect looks.</p><label className="mt-6 block text-sm font-semibold text-slate-700">Language<select className="mt-2 block w-full rounded-xl border border-slate-200 px-4 py-3 font-normal text-slate-600"><option>English</option><option>Hindi</option></select></label></Card></div></>;
}
