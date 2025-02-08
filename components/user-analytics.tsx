"use client"

import { useEffect, useState } from "react"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const initialData = [
  { name: "Jan", users: 0 },
  { name: "Feb", users: 0 },
  { name: "Mar", users: 0 },
  { name: "Apr", users: 0 },
  { name: "May", users: 0 },
  { name: "Jun", users: 0 },
  { name: "Jul", users: 0 },
]

export function UserAnalytics() {
  const [chartData, setChartData] = useState(initialData)

  useEffect(() => {
    setChartData(
      initialData.map((item, index) => ({
        ...item,
        users: (index + 1) * 200 + Math.floor(Math.random() * 100),
      })),
    )
  }, [])

  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={chartData}>
        <XAxis dataKey="name" stroke="#9b1c1c" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#9b1c1c" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
        <Tooltip />
        <Line type="monotone" dataKey="users" stroke="#e02424" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  )
}

