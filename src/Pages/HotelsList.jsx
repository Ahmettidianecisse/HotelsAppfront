import React, { useState } from "react";
import { Bell, Search, Plus, X } from "lucide-react";
import { Link } from "react-router-dom";

const hotels = [
  {
    name: "Hôtel Terrou-Bi",
    city: "Boulevard Martin Luther King, Dakar",
    price: "25 000 FCFA / nuit",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
  },
 {
    name: "King Fahd Palace",
    city: "Rte des Almadies, Dakar",
    price: "28 000 FCFA / nuit",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
  },
  {
    name: "Radisson Blu Hotel",
    city: "Rte de la Corniche Ouest, Dakar",
    price: "22 000 FCFA / nuit",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
  },
  {
    name: "Pullman Dakar Teranga",
    city: "Place de l’Indépendance, Dakar",
    price: "30 000 FCFA / nuit",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
  },
  {
    name: "Hôtel Lac Rose",
    city: "Lac Rose, Dakar",
    price: "25 000 FCFA / nuit",
    image: "https://images.unsplash.com/photo-1501117716987-c8e1ecb210f3",
  },
  {
    name: "Hôtel Saly",
    city: "Mbour, Sénégal",
    price: "20 000 FCFA / nuit",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  },
  {
    name: "Palm Beach Resort & Spa",
    city: "Saly",
    price: "32 000 FCFA / nuit",
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6",
  },
  {
    name: "Pullman Dakar Teranga",
    city: "Place de l’Indépendance, Dakar",
    price: "30 000 FCFA / nuit",
    image: "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a",
  },
  // ... tes autres hôtels
];

export default function HotelsList() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen flex bg-neutral-100">
      {/* Sidebar */}
      <aside className="w-64 bg-neutral-800 text-white flex flex-col justify-between">
        <div>
          <div className="p-6 font-bold">RED PRODUCT</div>
          <nav className="px-4 space-y-2 text-sm">
            <Link to="/dashboard" className="px-3 py-2 rounded hover:bg-neutral-700 block">
              Dashboard
            </Link>
            <Link to="/hotels" className="px-3 py-2 rounded bg-neutral-700 block">
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
          <h1 className="font-semibold">Liste des hôtels</h1>
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
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">
              Hôtels <span className="text-neutral-400">8</span>
            </h2>
            <button
              onClick={openModal}
              className="flex items-center gap-2 bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition"
            >
              <Plus className="w-4 h-4" /> Créer un nouveau hôtel
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {hotels.map((hotel, index) => (
              <div key={index} className="rounded-2xl overflow-hidden bg-white shadow">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="h-40 w-full object-cover"
                />
                <div className="p-4">
                  <p className="text-xs text-neutral-500 mb-1">{hotel.city}</p>
                  <h3 className="font-semibold text-sm">{hotel.name}</h3>
                  <p className="text-xs text-neutral-600 mt-1">{hotel.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-2xl w-96 p-6 relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-neutral-500 hover:text-black"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-lg font-semibold mb-4">Créer un nouvel hôtel</h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Nom de l'hôtel"
                className="w-full border rounded px-3 py-2"
              />
              <input
                type="text"
                placeholder="Ville"
                className="w-full border rounded px-3 py-2"
              />
              <input
                type="text"
                placeholder="Prix / nuit"
                className="w-full border rounded px-3 py-2"
              />
              <input
                type="text"
                placeholder="URL de l'image"
                className="w-full border rounded px-3 py-2"
              />

              <button
                type="submit"
                className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition"
              >
                Ajouter l'hôtel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
