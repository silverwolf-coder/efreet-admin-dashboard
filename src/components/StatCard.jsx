import React from "react";

export default function StatCard({ title, value, delta, good }) {
  return (
    <div className="card stat">
      <div className="stat-top">
        <span className="muted">{title}</span>
        <span className={`pill ${good ? "good" : ""}`}>{delta}</span>
      </div>
      <div className="stat-value">{value}</div>
      <div className="muted">Updated just now</div>
    </div>
  );
}
