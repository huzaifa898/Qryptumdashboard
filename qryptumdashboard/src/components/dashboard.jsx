import React from "react";
import { Sidebar } from "./sidebar";
import { Header } from "./header";
import { MonthlyGoal } from "./monthly-goal";
import { QuickActions } from "./quick-actions";
import { RecentActivity } from "./recent-activity";
import { NetworkHealth } from "./network-health";
import { EarningsBreakdown } from "./earnings-breakdown";

export function Dashboard() {
  return (
    <div className="w-screen h-screen bg-[#0F2942] flex items-center justify-center">
      <div className="w-full h-full max-w-[1440px] max-h-[940px] aspect-[16/10] bg-[#0A1929] rounded-[20px] overflow-hidden flex">
        <Sidebar />
        <div className="flex-1">
          <div className="flex flex-col h-full">
            <Header />
            <main className="flex-1 p-4 md:p-6">
              <div className="h-full flex flex-col space-y-6">
                <MonthlyGoal />
                <QuickActions />
                <RecentActivity />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
                  <NetworkHealth />
                  <EarningsBreakdown />
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}