import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar({ open, onToggle }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="brand">
          <div className="brand-dot" />
          <span className="brand-text">{open ? "Efreet 1.0 Admin" : "E1"}</span>
        </div>
        <button className="icon-btn" onClick={onToggle} aria-label="Toggle sidebar">
          ☰
        </button>
      </div>

      <nav className="sidebar-nav">
        <NavLink to="/dashboard" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>
          <span className="nav-ico">📈</span>
          {open && <span>Dashboard</span>}
        </NavLink>

        <NavLink to="/users" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>
          <span className="nav-ico">👥</span>
          {open && <span>Users</span>}
        </NavLink>

        <NavLink to="/settings" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>
          <span className="nav-ico">⚙️</span>
          {open && <span>Settings</span>}
        </NavLink>
      </nav>

      <div className="sidebar-footer">
        {open ? <small>Efreet Version 1.0</small> : <small>v1</small>}
      </div>
    </aside>
  );
}
