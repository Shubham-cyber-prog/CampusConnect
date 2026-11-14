// TODO: build this page's UI yourself (route: /dashboard)
import { activities, assignments, courses, deadlines, students } from "../../../data/data";
import { Card, PageHeader, ProgressBar, StatCard, StatusBadge } from "../../../components/UI";

export default function DashboardPage() {
  const averageAttendance = Math.round(students.reduce((total, student) => total + student.attendance, 0) / students.length);
  const pendingAssignments = assignments.filter((assignment) => assignment.status === "Pending").length;

  return (
    <>
      <PageHeader eyebrow="Overview" title="Good morning, Rahul" description="Here is what is happening across your academic workspace today." action={<button className="rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700">Download report</button>} />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Total Students" value={students.length} detail="Across 3 departments" accent="blue" />
        <StatCard label="Active Courses" value={courses.length} detail="21 credits this semester" accent="violet" />
        <StatCard label="Pending Tasks" value={pendingAssignments} detail="Due this week" accent="amber" />
        <StatCard label="Avg. Attendance" value={`${averageAttendance}%`} detail="4% above last month" accent="green" />
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.4fr_1fr]">
        <Card>
          <div className="mb-6 flex items-center justify-between"><div><h2 className="font-bold text-slate-950">Course progress</h2><p className="mt-1 text-sm text-slate-500">Your current semester overview</p></div><span className="text-sm font-semibold text-blue-600">View all</span></div>
          <div className="space-y-5">{courses.slice(0, 4).map((course) => <div key={course.id}><div className="mb-2 flex justify-between text-sm"><span className="font-medium text-slate-700">{course.title}</span><span className="text-slate-400">{course.credits} credits</span></div><ProgressBar value={course.progress} /></div>)}</div>
        </Card>

        <Card>
          <div className="mb-5 flex items-center justify-between"><div><h2 className="font-bold text-slate-950">Upcoming deadlines</h2><p className="mt-1 text-sm text-slate-500">Stay ahead of your submissions</p></div><span className="text-sm font-semibold text-blue-600">See all</span></div>
          <div className="space-y-4">{deadlines.map((deadline) => <div key={deadline.title} className="flex items-center justify-between gap-3"><div><p className="text-sm font-semibold text-slate-700">{deadline.title}</p><p className="mt-1 text-xs text-slate-400">Due {deadline.date}</p></div><StatusBadge status={deadline.priority} /></div>)}</div>
        </Card>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <Card><div className="mb-5"><h2 className="font-bold text-slate-950">Recent activity</h2><p className="mt-1 text-sm text-slate-500">Your latest academic updates</p></div><div className="space-y-4">{activities.map((activity, index) => <div key={activity} className="flex gap-3"><div className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-600 ring-4 ring-blue-50" /><div><p className="text-sm font-medium text-slate-700">{activity}</p><p className="mt-1 text-xs text-slate-400">{index + 1} day{index ? "s" : ""} ago</p></div></div>)}</div></Card>
        <Card><div className="mb-5"><h2 className="font-bold text-slate-950">Attendance snapshot</h2><p className="mt-1 text-sm text-slate-500">Department-wise average</p></div><div className="space-y-5">{["CSE", "ECE", "ME"].map((dept) => { const group = students.filter((student) => student.dept === dept); const value = Math.round(group.reduce((sum, student) => sum + student.attendance, 0) / group.length); return <div key={dept}><div className="mb-2 flex justify-between text-sm"><span className="font-semibold text-slate-700">{dept}</span><span className="font-bold text-slate-900">{value}%</span></div><ProgressBar value={value} /></div>; })}</div></Card>
      </div>
    </>
  );
}
