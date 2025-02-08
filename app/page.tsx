"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Overview } from "@/components/overview-chart"
import { RecentSales } from "@/components/recent-sales"
import { UserAnalytics } from "@/components/user-analytics"
import { ServerStatus } from "@/components/server-status"

export default function DashboardPage() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const data = {
    totalRevenue: 45231.89,
    activeUsers: 2350,
    sales: 12234,
    activeNow: 573,
  }

  if (!isClient) {
    return null // or a loading indicator
  }

  return (
    <div className="flex flex-col space-y-4 bg-ruby-50 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-ruby-800">Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[
          {
            title: "Total Revenue",
            value: `$${data.totalRevenue.toFixed(2)}`,
            subtext: "+20.1% from last month",
            color: "ruby",
          },
          { title: "Active Users", value: `+${data.activeUsers}`, subtext: "+180.1% from last month", color: "coral" },
          { title: "Sales", value: `+${data.sales}`, subtext: "+19% from last month", color: "ruby" },
          { title: "Active Now", value: `+${data.activeNow}`, subtext: "+201 since last hour", color: "coral" },
        ].map((item, index) => (
          <Card
            key={index}
            className={`bg-${item.color}-100 border-${item.color}-300 hover:shadow-lg transition-shadow duration-300`}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className={`text-sm font-medium text-${item.color}-800`}>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className={`text-2xl font-bold text-${item.color}-700`}>{item.value}</div>
              <p className={`text-xs text-${item.color}-600`}>{item.subtext}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-4">
          <Card className="bg-white border-ruby-200 hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-ruby-800">Overview</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <Overview />
            </CardContent>
          </Card>
        </div>
        <div className="col-span-3">
          <Card className="bg-white border-coral-200 hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-coral-800">Recent Sales</CardTitle>
              <CardDescription className="text-coral-600">You made 265 sales this month.</CardDescription>
            </CardHeader>
            <CardContent>
              <RecentSales />
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-4">
          <Card className="bg-white border-ruby-200 hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-ruby-800">User Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <UserAnalytics />
            </CardContent>
          </Card>
        </div>
        <div className="col-span-3">
          <Card className="bg-white border-coral-200 hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-coral-800">Server Status</CardTitle>
            </CardHeader>
            <CardContent>
              <ServerStatus />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

