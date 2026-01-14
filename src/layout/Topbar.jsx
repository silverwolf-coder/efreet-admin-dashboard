import React from "react";
import { useAuth } from "../auth/AuthContext.jsx";

export default function Topbar({ onToggleSidebar }) {
  const { user, logout } = useAuth();

  return (
    <header className="topbar">
      <div className="topbar-left">
        <button className="icon-btn" onClick={onToggleSidebar} aria-label="Toggle sidebar">
          ☰
        </button>

        <div className="search">
          <span className="search-ico">🔎</span>
          <input placeholder="Search..." />
        </div>
      </div>

      <div className="topbar-right">
        <div className="chip">
          <span className="chip-dot" />
          <span className="chip-text">{user?.email}</span>
        </div>
        <button className="btn" onClick={logout}>
          Logout
        </button>
      </div>
    </header>
  );
}
