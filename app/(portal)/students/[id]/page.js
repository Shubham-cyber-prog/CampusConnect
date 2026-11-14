import Link from "next/link";
import { notFound } from "next/navigation";
import { students } from "../../../../data/data";
import { Avatar, Card, PageHeader, ProgressBar, StatusBadge } from "../../../../components/UI";

export default function StudentDetailsPage({ params }) {
  const student = students.find((item) => item.id === Number(params.id));
  if (!student) notFound();
  return <><PageHeader eyebrow="Student profile" title={student.name} description="Academic profile, attendance and technical skill overview." action={<Link href="/students" className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700">← All students</Link>} /><div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]"><Card><div className="flex items-center gap-4"><Avatar name={student.name} large /><div><h2 className="text-xl font-bold text-slate-950">{student.name}</h2><p className="mt-1 text-sm text-slate-500">{student.email}</p><div className="mt-3"><StatusBadge status={student.dept} /></div></div></div><div className="mt-8 border-t border-slate-100 pt-6"><p className="text-xs font-bold uppercase tracking-wider text-slate-400">Contact</p><p className="mt-2 text-sm text-slate-600">{student.email}</p></div></Card><div className="space-y-6"><Card><h2 className="font-bold text-slate-950">Attendance</h2><p className="mt-1 text-sm text-slate-500">Current semester attendance performance</p><div className="mt-6"><ProgressBar value={student.attendance} /></div></Card><Card><h2 className="font-bold text-slate-950">Technical skills</h2><div className="mt-5 flex flex-wrap gap-2">{student.skills.map((skill) => <span key={skill} className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600">{skill}</span>)}</div></Card></div></div></>;
}
