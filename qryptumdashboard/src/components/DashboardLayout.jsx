import React from 'react';
import { Sidebar } from './sidebar';

export function DashboardLayout({ children }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#0F172A] to-[#1E293B] p-4">
      <div className="max-w-[1400px] w-full h-screen max-h-[900px] bg-[#0B0F19] rounded-[20px] shadow-[0px_7px_40px_rgba(0,0,0,0.6)] flex overflow-hidden border border-[#1E293B]">
        {/* Sidebar hides on small screens */}
        <div className="hidden md:block">
          <Sidebar />
        </div>
        
        <div className="flex-1 overflow-auto p-6">
          {children}
        </div>
      </div>
    </div>
  );
}
