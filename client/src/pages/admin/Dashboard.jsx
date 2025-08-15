import React from "react";
import { useNavigate } from "react-router-dom";
import { Users, FileText, BarChart3 } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();

  // Mock summary data with gradient backgrounds
  const stats = [
    {
      id: "users",
      label: "Total Users",
      value: 1245,
      icon: <Users className="w-6 h-6 text-blue-700" />,
      link: "/admin/users",
      gradient: "from-blue-300 to-blue-100",
    },
    {
      id: "blogs",
      label: "Total Blogs",
      value: 328,
      icon: <FileText className="w-6 h-6 text-green-700" />,
      link: "/admin/content-management",
      gradient: "from-green-300 to-green-200",
    },
    {
      id: "views",
      label: "Site Views",
      value: "56k",
      icon: <BarChart3 className="w-6 h-6 text-purple-700" />,
      link: "/admin/analytics",
      gradient: "from-purple-300 to-purple-100",
    },
  ];

  // Mock recent activity
  const recentActivity = [
    {
      id: 1,
      type: "blog",
      text: "New blog posted: 'La Liga Roundup'",
      date: "2025-08-14",
    },
    {
      id: 2,
      type: "user",
      text: "User 'Jane Doe' signed up",
      date: "2025-08-13",
    },
    {
      id: 3,
      type: "blog",
      text: "Blog 'Bundesliga Highlights' updated",
      date: "2025-08-12",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.id}
            onClick={() => navigate(stat.link)}
            className={`flex items-center justify-between p-5 rounded-xl cursor-pointer 
            bg-gradient-to-br ${stat.gradient} shadow-md hover:shadow-lg hover:scale-[1.02] transition`}
          >
            <div>
              <p className="text-sm text-gray-600">{stat.label}</p>
              <p className="text-xl font-bold text-gray-800">{stat.value}</p>
            </div>
            {stat.icon}
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white shadow-md rounded-xl p-5">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">
          Recent Activity
        </h2>
        <ul className="divide-y divide-gray-200">
          {recentActivity.map((item) => (
            <li
              key={item.id}
              className="py-3 flex justify-between items-center text-sm"
            >
              <span className="text-gray-700">{item.text}</span>
              <span className="text-xs text-gray-400">{item.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
