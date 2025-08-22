import React, { useState } from "react";
import Card from "../components/Card"; // reusing your animated card

// Mock demo data (replace with API later)
const demoFixtures = [
  {
    id: 1,
    league: "Premier League",
    date: "2025-08-22",
    time: "20:00",
    home: { name: "Arsenal", logo: "/logos/arsenal.png" },
    away: { name: "Chelsea", logo: "/logos/chelsea.png" },
    venue: "Emirates Stadium",
    status: "Upcoming",
    featured: true,
  },
  {
    id: 2,
    league: "Bundesliga",
    date: "2025-08-22",
    time: "19:30",
    home: { name: "Bayern Munich", logo: "/logos/bayern.png" },
    away: { name: "Dortmund", logo: "/logos/dortmund.png" },
    venue: "Allianz Arena",
    status: "Live",
  },
  {
    id: 3,
    league: "Ligue 1",
    date: "2025-08-22",
    time: "20:45",
    home: { name: "PSG", logo: "/logos/psg.png" },
    away: { name: "Marseille", logo: "/logos/marseille.png" },
    venue: "Parc des Princes",
    status: "Upcoming",
  },
];

const Fixtures = () => {
  const [selectedDate, setSelectedDate] = useState("2025-08-22");

  const filteredFixtures = demoFixtures.filter(
    (fx) => fx.date === selectedDate
  );

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-4">
        <h1 className="text-3xl font-extrabold text-gray-900">
          Fixtures & Results
        </h1>

        {/* Filters */}
        <div className="flex gap-3">
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="border rounded-lg px-3 py-1.5 text-sm"
          />
          <select className="border rounded-lg px-3 py-1.5 text-sm">
            <option>All Leagues</option>
            <option>Premier League</option>
            <option>Bundesliga</option>
            <option>Ligue 1</option>
          </select>
        </div>
      </div>

      {filteredFixtures.length === 0 ? (
        <p className="text-gray-500">No fixtures for this date.</p>
      ) : (
        <>
          {/* Featured Match */}
          {filteredFixtures.find((fx) => fx.featured) && (
            <Card className="mb-10 p-6 bg-gradient-to-r from-green-50 to-white">
              {(() => {
                const fm = filteredFixtures.find((fx) => fx.featured);
                return (
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="flex-1 text-center md:text-left">
                      <h2 className="text-xl font-bold mb-2">{fm.league}</h2>
                      <p className="text-gray-600 mb-1">{fm.venue}</p>
                      <p className="text-gray-500">
                        {fm.date} • {fm.time}
                      </p>
                    </div>

                    <div className="flex items-center gap-6 text-xl font-semibold">
                      <div className="flex items-center gap-2">
                        <img
                          src={fm.home.logo}
                          alt={fm.home.name}
                          className="w-10 h-10"
                        />
                        <span>{fm.home.name}</span>
                      </div>
                      <span className="text-gray-400">vs</span>
                      <div className="flex items-center gap-2">
                        <img
                          src={fm.away.logo}
                          alt={fm.away.name}
                          className="w-10 h-10"
                        />
                        <span>{fm.away.name}</span>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </Card>
          )}

          {/* Fixtures Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredFixtures.map((fx) => (
              <Card key={fx.id} className="p-5 flex flex-col">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-medium text-gray-600">
                    {fx.league}
                  </span>
                  {fx.status === "Live" && (
                    <span className="text-xs px-2 py-0.5 bg-red-500 text-white rounded-full animate-pulse">
                      Live
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between text-gray-800 font-semibold text-base mb-4">
                  <div className="flex items-center gap-2">
                    <img
                      src={fx.home.logo}
                      alt={fx.home.name}
                      className="w-8 h-8"
                    />
                    <span>{fx.home.name}</span>
                  </div>
                  <span className="text-gray-400">vs</span>
                  <div className="flex items-center gap-2">
                    <img
                      src={fx.away.logo}
                      alt={fx.away.name}
                      className="w-8 h-8"
                    />
                    <span>{fx.away.name}</span>
                  </div>
                </div>

                <p className="text-sm text-gray-500 mb-2">{fx.venue}</p>
                <p className="text-sm text-gray-500">
                  {fx.date} • {fx.time}
                </p>
              </Card>
            ))}
          </div>
        </>
      )}

      {/* Sidebar / Widgets (optional for future) */}
      {/* <aside className="mt-12">
        <StandingsWidget />
        <TopScorersWidget />
      </aside> */}

      {/* Footer CTA */}
      <div className="flex justify-center mt-12">
        <button className="px-6 py-2.5 bg-green-600 text-white text-sm font-medium rounded-full shadow hover:bg-green-700 transition">
          View League Tables →
        </button>
      </div>
    </div>
  );
};

export default Fixtures;
