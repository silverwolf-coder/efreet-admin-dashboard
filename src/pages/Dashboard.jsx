import React from "react";
import StatCard from "../components/StatCard.jsx";
import SalesLineChart from "../components/charts/SalesLineChart.jsx";
import TrafficPieChart from "../components/charts/TrafficPieChart.jsx";
import DataTable from "../components/DataTable.jsx";

const demoRows = Array.from({ length: 18 }).map((_, i) => ({
  id: `INV-${1000 + i}`,
  customer: ["Andi", "Siti", "Budi", "Rani", "Dewi"][i % 5],
  amount: (120000 + i * 17500).toLocaleString("id-ID"),
  status: ["Paid", "Pending", "Overdue"][i % 3],
  date: `2026-01-${String((i % 28) + 1).padStart(2, "0")}`,
}));

export default function Dashboard() {
  return (
    <div className="stack">
      <div className="page-head">
        <h1>Dashboard</h1>
        <p className="muted">Overview statistik dan performa.</p>
      </div>

      <div className="grid stats">
        <StatCard title="Revenue" value="Rp 128.4M" delta="+12.4%" />
        <StatCard title="Orders" value="4,392" delta="+4.1%" />
        <StatCard title="Active Users" value="18,204" delta="+2.8%" />
        <StatCard title="Churn" value="1.9%" delta="-0.3%" good />
      </div>

      <div className="grid charts">
        <div className="card">
          <div className="card-head">
            <h3>Sales Trend</h3>
            <span className="muted">Last 14 days</span>
          </div>
          <SalesLineChart />
        </div>

        <div className="card">
          <div className="card-head">
            <h3>Traffic Sources</h3>
            <span className="muted">This month</span>
          </div>
          <TrafficPieChart />
        </div>
      </div>

      <div className="card">
        <div className="card-head">
          <h3>Latest Invoices</h3>
          <span className="muted">Table + pagination</span>
        </div>
        <DataTable
          columns={[
            { key: "id", header: "Invoice" },
            { key: "customer", header: "Customer" },
            { key: "amount", header: "Amount" },
            { key: "status", header: "Status" },
            { key: "date", header: "Date" },
          ]}
          rows={demoRows}
          pageSize={6}
        />
      </div>
    </div>
  );
}
