"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const salesData = [
  { name: "Olivia Martin", email: "olivia.martin@email.com", amount: "+$1,999.00" },
  { name: "Jackson Lee", email: "jackson.lee@email.com", amount: "+$39.00" },
  { name: "Isabella Nguyen", email: "isabella.nguyen@email.com", amount: "+$299.00" },
  { name: "William Kim", email: "william.kim@email.com", amount: "+$99.00" },
]

export function RecentSales() {
  return (
    <div className="space-y-8">
      {salesData.map((sale, index) => (
        <div key={index} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={`/avatars/0${index + 1}.png`} alt="Avatar" />
            <AvatarFallback>
              {sale.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none text-ruby-800">{sale.name}</p>
            <p className="text-sm text-ruby-600">{sale.email}</p>
          </div>
          <div className="ml-auto font-medium text-green-600">{sale.amount}</div>
        </div>
      ))}
    </div>
  )
}

