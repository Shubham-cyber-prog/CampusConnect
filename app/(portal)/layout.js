import Sidebar, { MobileNavigation } from "../../components/Sidebar";

export default function PortalLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 md:flex">
      <Sidebar />

      <div className="min-w-0 flex-1">
        <header className="border-b border-slate-200 bg-white px-5 py-4 md:hidden">
          <p className="font-bold">CampusConnect</p>
        </header>
        <MobileNavigation />

        <main className="p-5 md:p-8">{children}</main>
      </div>
    </div>
  );
}
