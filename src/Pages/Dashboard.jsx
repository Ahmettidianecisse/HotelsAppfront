import React from "react";
import { Bell, Search } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { label: "Formulaires", value: 125, color: "bg-purple-500" },
  { label: "Messages", value: 40, color: "bg-emerald-500" },
  { label: "Utilisateurs", value: 600, color: "bg-yellow-400" },
  { label: "Emails", value: 25, color: "bg-red-500" },
  { label: "Hotels", value: 40, color: "bg-fuchsia-500" },
  { label: "Entrées", value: 2, color: "bg-blue-500" },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen flex bg-neutral-100">
      {/* Sidebar */}
      <aside className="w-64 bg-neutral-800 text-white flex flex-col justify-between">
        <div>
          <div className="p-6 font-bold tracking-wide">RED PRODUCT</div>
          <nav className="px-4 space-y-2 text-sm">
            <Link
              to="/dashboard"
              className="px-3 py-2 rounded bg-neutral-700 block"
            >
              Dashboard
            </Link>
            <Link
              to="/hotelsList"
              className="px-3 py-2 rounded hover:bg-neutral-700 block"
            >
              Liste des hôtels
            </Link>
          </nav>
        </div>
        <div className="p-4 text-sm text-neutral-300">
          <div className="font-medium">Mohamed Badiine</div>
          <div className="text-xs text-emerald-400">● En ligne</div>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1">
        {/* Topbar */}
        <div className="h-16 bg-white flex items-center justify-between px-6 border-b">
          <h1 className="font-semibold">Dashboard</h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
              <input
                type="text"
                placeholder="Recherche"
                className="pl-9 h-8 border rounded px-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <Bell className="w-5 h-5 text-neutral-600" />
            <div className="w-8 h-8 rounded-full bg-neutral-300" />
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h2 className="text-lg font-semibold">Bienvenue sur RED Product</h2>
          <p className="text-sm text-neutral-500 mb-6">
            Lorem ipsum dolor sit amet consectetur
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl bg-white shadow p-4 flex items-center gap-4"
              >
                <div className={`w-10 h-10 rounded-full ${s.color}`} />
                <div>
                  <div className="font-semibold">{s.value}</div>
                  <div className="text-sm text-neutral-500">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
