import React, { PropTypes } from "react";
import { createStore, getState } from "xander";
import { Link } from "xander";

console.log("create store nav-view");

var store = createStore("nav-view", {
  getInitialState: () => getState()["nav-view"] || { show: false },
  openPath: () => ({ show: false }),
  toggleMenu: state => {
    console.log("toggle", !state.show);
    return { show: !state.show };
  }
});

window.navStore = store;

const Nav = React.createClass({
  render() {
    var state = store.getState() || { show: false };

    return (
      <nav role="navigation">
        <a
          href="#"
          className="navigation-menu-button"
          onClick={e => {
            e.preventDefault();
            store.dispatch("toggleMenu");
          }}
        >
          MENU
        </a>
        <ul
          id="js-navigation-menu"
          style={{ listStyleType: "none", display: state.show ? "" : "none" }}
        >
          <li className="nav-link">
            <Link to="/easing">Easing</Link>
          </li>
          <li className="nav-link">
            <Link to="/easing">Tween Color</Link>{" "}
          </li>
        </ul>
      </nav>
    );
  }
});

export default Nav;
