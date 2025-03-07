import { Sidebar } from "./sidebar"
import { Header } from "./header"
import { MonthlyGoal } from "./monthly-goal"
import { QuickActions } from "./quick-actions"
import { RecentActivity } from "./recent-activity"
import { NetworkHealth } from "./network-health"
import { EarningsBreakdown } from "./earnings-breakdown"

export function Dashboard() {
  return (
    <div className="w-full min-h-screen bg-[#0F2942] flex flex-col md:flex-row overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col min-h-screen bg-[#0F2942]">
        <Header />
        <main className="flex-1 p-4 md:p-6 overflow-auto bg-[#0F2942]">
          <div className="h-full flex flex-col space-y-6">
            <MonthlyGoal />
            <QuickActions />
            <RecentActivity />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <NetworkHealth />
              <EarningsBreakdown />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

