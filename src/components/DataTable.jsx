import React, { useMemo, useState } from "react";

export default function DataTable({ columns, rows, pageSize = 10 }) {
  const [page, setPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(rows.length / pageSize));

  const pageRows = useMemo(() => {
    const start = (page - 1) * pageSize;
    return rows.slice(start, start + pageSize);
  }, [rows, page, pageSize]);

  const go = (p) => setPage(Math.min(totalPages, Math.max(1, p)));

  return (
    <div>
      <div className="table-wrap">
        <table className="table">
          <thead>
            <tr>
              {columns.map((c) => (
                <th key={c.key}>{c.header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {pageRows.map((r, idx) => (
              <tr key={r.id ?? idx}>
                {columns.map((c) => (
                  <td key={c.key}>
                    {c.key === "status" ? <StatusBadge value={r[c.key]} /> : r[c.key]}
                  </td>
                ))}
              </tr>
            ))}
            {pageRows.length === 0 && (
              <tr>
                <td colSpan={columns.length} className="muted">
                  No data
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="table-footer">
        <span className="muted">
          Page {page} / {totalPages} • {rows.length} rows
        </span>
        <div className="pager">
          <button className="btn" onClick={() => go(1)} disabled={page === 1}>
            «
          </button>
          <button className="btn" onClick={() => go(page - 1)} disabled={page === 1}>
            Prev
          </button>
          <button className="btn" onClick={() => go(page + 1)} disabled={page === totalPages}>
            Next
          </button>
          <button className="btn" onClick={() => go(totalPages)} disabled={page === totalPages}>
            »
          </button>
        </div>
      </div>
    </div>
  );
}

function StatusBadge({ value }) {
  const v = String(value || "").toLowerCase();
  const cls =
    v.includes("paid") ? "badge ok" : v.includes("pending") ? "badge warn" : v.includes("overdue") ? "badge bad" : "badge";
  return <span className={cls}>{value}</span>;
}
