import React from 'react';
import { Sidebar } from './sidebar';

export function DashboardLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#0F172A] to-[#1E293B]">
      <Sidebar />
      <div className="flex-1 overflow-auto p-6">
        {children}
      </div>
    </div>
  );
}
