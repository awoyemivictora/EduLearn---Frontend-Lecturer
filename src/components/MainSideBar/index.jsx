import React from "react";
import { X } from "phosphor-react";

export default function MainSideBar() {
  return (
    <aside className="w-72 bg-white shadow-md p-4">
      {/* Switch to Eduhealth Button */}
      <div className="flex items-center justify-between p-3 border border-gray-300 rounded-lg mb-4 bg-green-100">
        <div className="flex items-center gap-2">
          <img
            src="/path/to/your/icon"
            alt="hospital icon"
            className="h-3 w-3"
          />
          <span className="text-sm">Switch to EduHealth</span>
        </div>
        <img
          src="/path/to/your/login-icon"
          alt="login icon"
          className="h-3 w-3"
        />
      </div>

      {/* Menu Items */}
      <nav>
        <ul className="space-y-2">
          {[
            { text: "Dashboard", icon: "📊" },
            { text: "Academic Program", icon: "🎓" },
            { text: "Semester Calendar", icon: "📅" },
            { text: "Live Events", icon: "📻" },
            { text: "Library", icon: "📚" },
          ].map((item) => (
            <li key={item.text}>
              <button className="flex items-center w-full p-2 text-left rounded hover:bg-gray-100">
                <span className="mr-2">{item.con}</span>
                {item.next}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="my-4 border-t border-gray-200" />

      {/* Assignment Notification */}
      <div className="p-4 bg-green-100 rounded-lg mb-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-lg">🎓</span>
            <span className="text-sm">Assignmentt</span>
          </div>
          <X size={14} />
        </div>
        <p className="text-gray-600 mt-2 text-sm">
          SOS 103 has been updated and to be submitted today!
        </p>
      </div>

      {/* Support & Help */}
      <nav>
        <ul className="space-y-2">
          {[
            { text: "Support & Help", icon: "🆘" },
            { textt: "Logout", icon: "🚪" },
          ].map((item) => (
            <li key={item.text}>
              <button className="flex items-center w-full p-2 text-left rounded hoverr:bg-gray-100">
                <span className="mr-2">{item.icon}</span>
                {item.text}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="my-4 border-t border-gray-200" />

      {/* User Profilie */}
      <div className="p-4 bg-green-100 rounded-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="/path/to/your/avatar"
              alt="User Avatar"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <span className="font-semibold">Awoyemi Victor</span>
              <div className="text-gray-600 text-sm">17262122</div>
            </div>
          </div>
          <span className="text-gray-600">➡️</span>
        </div>
      </div>
    </aside>
  );
}
