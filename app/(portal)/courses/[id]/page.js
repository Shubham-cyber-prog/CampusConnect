import Link from "next/link";
import { notFound } from "next/navigation";
import { courses } from "../../../../data/data";
import { Card, PageHeader, ProgressBar } from "../../../../components/UI";

export default function CourseDetailsPage({ params }) {
  const course = courses.find((item) => item.id === Number(params.id));
  if (!course) notFound();
  return <><PageHeader eyebrow="Course details" title={course.title} description="Review course progress and learning information for this semester." action={<Link href="/courses" className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700">← All courses</Link>} /><div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]"><Card><div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-2xl font-bold text-blue-700">{course.title.slice(0, 1)}</div><h2 className="mt-6 text-2xl font-bold text-slate-950">{course.title}</h2><p className="mt-2 text-slate-500">Led by {course.faculty}</p><div className="mt-8"><div className="mb-3 flex justify-between text-sm font-semibold"><span className="text-slate-600">Semester progress</span><span className="text-blue-600">{course.progress}%</span></div><ProgressBar value={course.progress} /></div></Card><Card><h2 className="font-bold text-slate-950">Course information</h2><div className="mt-5 divide-y divide-slate-100">{[["Faculty", course.faculty], ["Credits", `${course.credits} credits`], ["Status", "In progress"], ["Format", "Classroom + practical"]].map(([label, value]) => <div key={label} className="flex justify-between py-4 text-sm"><span className="text-slate-500">{label}</span><span className="font-semibold text-slate-800">{value}</span></div>)}</div></Card></div></>;
}
