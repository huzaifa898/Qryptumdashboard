import React from 'react';
import { Sidebar } from './sidebar';

export function DashboardLayout({ children }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-[1440px] h-[900px] bg-black rounded-[20px] overflow-hidden flex">
        <Sidebar />
        <div className="flex-1 overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
}