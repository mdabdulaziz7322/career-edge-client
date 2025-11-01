import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";


 const data = [
    { name: "01", applied: 80, pending: 50, rejected: 30 },
    { name: "02", applied: 100, pending: 60, rejected: 40 },
    { name: "03", applied: 150, pending: 90, rejected: 60 },
    { name: "04", applied: 200, pending: 100, rejected: 80 },
    { name: "05", applied: 170, pending: 90, rejected: 70 },
    { name: "06", applied: 220, pending: 120, rejected: 60 },
    { name: "07", applied: 190, pending: 110, rejected: 90 },
    { name: "08", applied: 210, pending: 130, rejected: 70 },
  ];

const COLORS = ["#facc15", "#38a3a5", "#f87171"];

const ApplicationCharts = () => {
    return (
        <div className="bg-[#f4fdfd] rounded-2xl shadow-md p-6 border border-[#e8f7f7] mb-10">
      <h2 className="text-xl font-semibold text-[#154f4e] mb-4">
        Application Statistics Overview
      </h2>

      <div className="w-full h-96">
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorApplied" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#38a3a5" stopOpacity={0.5} />
                <stop offset="95%" stopColor="#38a3a5" stopOpacity={0.05} />
              </linearGradient>
              <linearGradient id="colorPending" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ff7d00" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#ff7d00" stopOpacity={0.05} />
              </linearGradient>
              <linearGradient id="colorRejected" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#154f4e" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#154f4e" stopOpacity={0.05} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" stroke="#e0f2f1" />
            <XAxis
              dataKey="name"
              tick={{ fill: "#154f4e", fontSize: 12 }}
              axisLine={false}
            />
            <YAxis
              tick={{ fill: "#154f4e", fontSize: 12 }}
              axisLine={false}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#ffffff",
                border: "1px solid #d2f0f0",
                borderRadius: "8px",
              }}
              labelStyle={{ color: "#154f4e", fontWeight: 500 }}
            />
            <Legend />

            <Area
              type="monotone"
              dataKey="applied"
              stroke="#38a3a5"
              fillOpacity={1}
              fill="url(#colorApplied)"
              strokeWidth={2}
              activeDot={{ r: 5, fill: "#38a3a5" }}
            />
            <Area
              type="monotone"
              dataKey="pending"
              stroke="#ff7d00"
              fillOpacity={1}
              fill="url(#colorPending)"
              strokeWidth={2}
              activeDot={{ r: 5, fill: "#ff7d00" }}
            />
            <Area
              type="monotone"
              dataKey="rejected"
              stroke="#154f4e"
              fillOpacity={1}
              fill="url(#colorRejected)"
              strokeWidth={2}
              activeDot={{ r: 5, fill: "#154f4e" }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
    );
};

export default ApplicationCharts;