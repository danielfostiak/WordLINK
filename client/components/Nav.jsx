import React from "react";

function Nav(props) {
  const { swapPath } = props;
  return (
    <div className="navbar bg-base-300 shadow-xl rounded-2xl">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li onClick={() => window.how_to_modal.showModal()}>
              <a>How to play</a>
            </li>
            <li onClick={() => window.coming_soon_modal.showModal()}>
              <a>Share</a>
            </li>
            <li onClick={() => window.coming_soon_modal.showModal()}>
              <a>Sign up</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a onClick={swapPath} className="btn btn-ghost normal-case text-xl">
          "WordLINK"
        </a>
      </div>
      <div className="navbar-end">
        <button
          onClick={() => window.calendar_modal.showModal()}
          className="btn btn-ghost btn-circle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            className="bi bi-calendar"
            viewBox="0 0 16 16"
          >
            {" "}
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />{" "}
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Nav;
