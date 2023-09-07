// Layout componen
import React from "react";
import Header from "./Header"; // Import the Header component

function Layout({ children }) {
  return (
    <div className='min-h-screen flex flex-col '>
      <Header /> {/* Use the Header component */}
      <main className='flex-grow p-4'>{children}</main>
      <footer className='bg-blue-500 text-white p-4'>
        <p>
          &copy; {new Date().getFullYear()} My Fitness App. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Layout;
