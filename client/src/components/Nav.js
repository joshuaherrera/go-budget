import React from "react";

const Nav = () => {
  return (
    <nav>
      <div className="nav-wrapper container">
        <a href="#" class="brand-logo">
          Logo
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="#">Budgets</a>
          </li>
          <li>
            <a href="#">Debts</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
          <li>
            <a href="#">Signup</a>
          </li>
          <li>
            <a href="#">Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
