import React from 'react';
import { Outlet } from 'react-router';
import Navigation from '../widgets/Navigation/Navigation';
import Footer from '../widgets/Footer/Footer';

export default function Layout() {
  return (
    <div className='app'>
      <Navigation />
      <main className='main'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}