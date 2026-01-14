import React, { useMemo, useState } from "react";
import DataTable from "../components/DataTable.jsx";

export default function Users() {
  const [q, setQ] = useState("");

  const rows = useMemo(() => {
    const base = Array.from({ length: 28 }).map((_, i) => ({
      id: `U-${String(i + 1).padStart(3, "0")}`,
      name: ["Andi", "Siti", "Budi", "Rani", "Dewi", "Rizky"][i % 6],
      email: `user${i + 1}@example.com`,
      role: ["admin", "editor", "viewer"][i % 3],
      createdAt: `2025-12-${String((i % 28) + 1).padStart(2, "0")}`,
    }));

    if (!q.trim()) return base;
    const qq = q.toLowerCase();
    return base.filter((r) => Object.values(r).some((v) => String(v).toLowerCase().includes(qq)));
  }, [q]);

  return (
    <div className="stack">
      <div className="page-head">
        <h1>Users</h1>
        <p className="muted">Manage pengguna dan role.</p>
      </div>

      <div className="card">
        <div className="card-head">
          <h3>User List</h3>
          <div className="inline">
            <input className="input" placeholder="Filter..." value={q} onChange={(e) => setQ(e.target.value)} />
          </div>
        </div>

        <DataTable
          columns={[
            { key: "id", header: "ID" },
            { key: "name", header: "Name" },
            { key: "email", header: "Email" },
            { key: "role", header: "Role" },
            { key: "createdAt", header: "Created" },
          ]}
          rows={rows}
          pageSize={8}
        />
      </div>
    </div>
  );
}
