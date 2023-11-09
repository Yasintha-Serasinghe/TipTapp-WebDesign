import React from "react";

function NavBar() {
  return (
    <div>
      <div
        class="navbar scroll-smooth sticky"
        style={{ backgroundColor: "#070324" }}
      >
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 pointer-events-auto"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Get help Now</a>
                <ul class="p-2">
                  <li>
                    <a>Move & Deliver</a>
                  </li>
                  <li>
                    <a>Buy for Me</a>
                  </li>
                  <li>
                    <a>Remove & Recycle</a>
                  </li>
                  <li>
                    <a>Give Away</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Become a helper</a>
              </li>
              <li>
                <a>Safe recycling</a>
              </li>
              <li>
                <a>About tiptapp</a>
                <ul class="p-2">
                  <li>
                    <a>About Us</a>
                  </li>
                  <li>
                    <a>Reuse & Circularity</a>
                  </li>
                  <li>
                    <a>Supporting cities</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <a class="btn btn-ghost font-logo font-extrabold text-4xl text-white lowercase mx-0 lg:mx-5">
            tiptapp
          </a>
        </div>
        <div class="navbar-center hidden lg:flex sticky  top-0 z-50 text-white">
          <ul class="menu menu-horizontal px-1 font-medium">
            <li>
              <a>Home</a>
            </li>
            <li tabindex="0">
              <details>
                <summary>Get Help Now</summary>
                <ul class="p-2 flex-col columns-2">
                  <li>
                    <a>Move & Deliver</a>
                  </li>
                  <li>
                    <a>Buy for Me</a>
                  </li>
                  <li>
                    <a>Remove & Recycle</a>
                  </li>
                  <li>
                    <a>Give Away</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Become a helper</a>
            </li>
            <li>
              <a>Safe recycling</a>
            </li>
            <li tabindex="1">
              <details>
                <summary>About Tiptaap</summary>
                <ul class="p-0 flex flex-auto w-96 items-center justify-center">
                  <li>
                    <a>About Us</a>
                  </li>
                  <li>
                    <a>Reuse & Circularity</a>
                  </li>
                  <li>
                    <a>Supporting cities</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div class="navbar-end text-white">
          <li tabindex="2">
            <details>
              <summary>Language</summary>
              <ul class="p-2">
                <li>
                  <a>English</a>
                </li>
                <li>
                  <a>Italy</a>
                </li>
              </ul>
            </details>
          </li>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
