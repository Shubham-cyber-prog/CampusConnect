"use client";

import Link from "next/link";
import { useState } from "react";
import { students } from "../../../data/data";
import { Avatar, Card, PageHeader, StatusBadge } from "../../../components/UI";

export default function StudentsPage() {
  const [query, setQuery] = useState("");
  const [department, setDepartment] = useState("All");
  const visibleStudents = students.filter((student) => `${student.name} ${student.email}`.toLowerCase().includes(query.toLowerCase()) && (department === "All" || student.dept === department));

  return <><PageHeader eyebrow="People" title="Students" description="Search students, review departments and open individual academic profiles." action={<span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">{visibleStudents.length} students</span>} /><Card className="mb-5"><div className="grid gap-3 md:grid-cols-[1fr_180px]"><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by name or email..." className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-blue-100" /><select value={department} onChange={(event) => setDepartment(event.target.value)} className="rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-600 outline-none"><option>All</option><option>CSE</option><option>ECE</option><option>ME</option></select></div></Card><Card className="overflow-hidden p-0"><div className="overflow-x-auto"><table className="w-full min-w-[700px] text-left"><thead className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wider text-slate-400"><tr><th className="px-6 py-4">Student</th><th className="px-6 py-4">Department</th><th className="px-6 py-4">Attendance</th><th className="px-6 py-4">Skills</th><th className="px-6 py-4" /></tr></thead><tbody className="divide-y divide-slate-100">{visibleStudents.map((student) => <tr key={student.id} className="hover:bg-slate-50"><td className="px-6 py-5"><div className="flex items-center gap-3"><Avatar name={student.name} /><div><p className="font-semibold text-slate-800">{student.name}</p><p className="mt-1 text-xs text-slate-400">{student.email}</p></div></div></td><td className="px-6 py-5"><StatusBadge status={student.dept} /></td><td className="px-6 py-5 text-sm font-semibold text-slate-700">{student.attendance}%</td><td className="px-6 py-5 text-sm text-slate-500">{student.skills.join(", ")}</td><td className="px-6 py-5"><Link href={`/students/${student.id}`} className="text-sm font-bold text-blue-600">View →</Link></td></tr>)}</tbody></table></div>{visibleStudents.length === 0 && <p className="p-8 text-center text-sm text-slate-500">No students match your search.</p>}</Card></>;
}
