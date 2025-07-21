import React from "react";

const Dashboardlayout = ({ children }) => {
  return (
    <div>
      <header>Navbar</header>
      {children}
      <footer>Footer</footer>
    </div>
  );
};

export default Dashboardlayout;
