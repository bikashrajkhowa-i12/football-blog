import React, { useState } from "react";
import { User, Bell, Settings as Cog, Shield } from "lucide-react";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const tabs = [
    { id: "profile", label: "Profile", icon: <User className="w-4 h-4" /> },
    {
      id: "preferences",
      label: "Preferences",
      icon: <Bell className="w-4 h-4" />,
    },
    { id: "system", label: "System", icon: <Cog className="w-4 h-4" /> },
    {
      id: "admin",
      label: "Admin Controls",
      icon: <Shield className="w-4 h-4" />,
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>

      {/* Tabs */}
      <div className="flex space-x-4 border-b mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center space-x-2 py-2 px-4 text-sm font-medium border-b-2 transition ${
              activeTab === tab.id
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Panels */}
      <div className="bg-white shadow rounded-lg p-6">
        {activeTab === "profile" && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Profile Settings</h2>
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                className="w-full border rounded-md px-3 py-2 text-sm"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full border rounded-md px-3 py-2 text-sm"
                placeholder="Enter your email"
              />
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
              Save Changes
            </button>
          </div>
        )}

        {activeTab === "preferences" && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Preferences</h2>
            <div className="flex items-center justify-between">
              <span className="text-sm">Dark Mode</span>
              <input type="checkbox" className="toggle" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Email Notifications</span>
              <input type="checkbox" className="toggle" />
            </div>
          </div>
        )}

        {activeTab === "system" && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">System Settings</h2>
            <div>
              <label className="block text-sm font-medium mb-1">
                Default Pagination
              </label>
              <select className="w-full border rounded-md px-3 py-2 text-sm">
                <option>5</option>
                <option>10</option>
                <option>20</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Blog Moderation
              </label>
              <select className="w-full border rounded-md px-3 py-2 text-sm">
                <option>Auto-approve</option>
                <option>Require Admin Review</option>
              </select>
            </div>
          </div>
        )}

        {activeTab === "admin" && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Admin Controls</h2>
            <div>
              <label className="block text-sm font-medium mb-1">
                Manage Roles
              </label>
              <button className="px-4 py-2 bg-gray-100 rounded-md text-sm">
                Go to Roles Page
              </button>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">API Key</label>
              <input
                type="text"
                className="w-full border rounded-md px-3 py-2 text-sm"
                placeholder="Generate or paste API key"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;
