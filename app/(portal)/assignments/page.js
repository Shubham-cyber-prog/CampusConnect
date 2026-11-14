// TODO: build this page's UI yourself (route: /assignments)
"use client";

import { useState } from "react";
import { assignments } from "../../../data/data";
import { Card, PageHeader, StatusBadge } from "../../../components/UI";

export default function AssignmentsPage() {
  const [filter, setFilter] = useState("All");
  const visible = filter === "All" ? assignments : assignments.filter((assignment) => assignment.status === filter);

  return <><PageHeader eyebrow="Productivity" title="Assignments" description="Manage submissions and keep track of every academic deadline." /><div className="mb-5 flex gap-2 overflow-x-auto">{["All", "Pending", "Submitted", "Completed"].map((item) => <button key={item} onClick={() => setFilter(item)} className={`rounded-full px-4 py-2 text-sm font-semibold ${filter === item ? "bg-blue-600 text-white" : "bg-white text-slate-500 ring-1 ring-slate-200"}`}>{item}</button>)}</div><Card className="overflow-hidden p-0"><div className="overflow-x-auto"><table className="w-full min-w-[680px] text-left"><thead className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wider text-slate-400"><tr><th className="px-6 py-4">Assignment</th><th className="px-6 py-4">Course</th><th className="px-6 py-4">Due date</th><th className="px-6 py-4">Status</th></tr></thead><tbody className="divide-y divide-slate-100">{visible.map((assignment) => <tr key={assignment.id} className="hover:bg-slate-50"><td className="px-6 py-5 font-semibold text-slate-800">{assignment.title}</td><td className="px-6 py-5 text-sm text-slate-500">{assignment.course}</td><td className="px-6 py-5 text-sm text-slate-500">{assignment.due}</td><td className="px-6 py-5"><StatusBadge status={assignment.status} /></td></tr>)}</tbody></table></div></Card></>;
}
