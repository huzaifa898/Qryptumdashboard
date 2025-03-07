import React from 'react';
import { Sidebar } from './sidebar';
import { Header } from './header';
import { SetParameters } from './set-parameters';

function Layout() {
  return (
    <div className="flex h-screen w-screen bg-[#0F2942]">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Header />
        <div className="flex justify-center items-center flex-grow">
          <SetParameters />
        </div>
      </div>
    </div>
  );
}

export default Layout;