import React from "react";
import { ResponsiveContainer, PieChart, Pie, Tooltip, Cell } from "recharts";

const data = [
  { name: "Organic", value: 52 },
  { name: "Ads", value: 28 },
  { name: "Referral", value: 12 },
  { name: "Email", value: 8 },
];


const COLORS = ["#ff2e6e", "#ff3b30", "#ffcc66", "#7c3aed"];

export default function TrafficPieChart() {
  return (
    <div style={{ width: "100%", height: 280 }}>
      <ResponsiveContainer>
        <PieChart>
          <Tooltip />
          <Pie data={data} dataKey="value" nameKey="name" innerRadius={65} outerRadius={100}>
            {data.map((_, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
