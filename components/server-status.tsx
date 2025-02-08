"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"

const initialServers = [
  { name: "Web Server", status: "operational" },
  { name: "Database Server", status: "operational" },
  { name: "API Server", status: "operational" },
  { name: "Cache Server", status: "operational" },
]

export function ServerStatus() {
  const [statuses, setStatuses] = useState(initialServers)

  useEffect(() => {
    const interval = setInterval(() => {
      setStatuses((prevStatuses) =>
        prevStatuses.map((server) => ({
          ...server,
          status: Math.random() > 0.9 ? "down" : "operational",
        })),
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="space-y-4">
      {statuses.map((server, index) => (
        <div key={index} className="flex items-center justify-between">
          <span className="text-ruby-800">{server.name}</span>
          <Badge
            variant={server.status === "operational" ? "default" : "destructive"}
            className={`
              ${server.status === "operational" ? "bg-green-500" : "bg-red-500"}
              transition-colors duration-300
            `}
          >
            {server.status}
          </Badge>
        </div>
      ))}
    </div>
  )
}

