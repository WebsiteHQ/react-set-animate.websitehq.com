import React, { PropTypes } from "react";
import branch from "formula/fn/branch";
import { Link } from "xander";
import Nav from "./Nav";
const header = React.createClass({
  render() {
    return (
      <div className="header">
        <Link to="/">
          <h1>React-Set-Animate</h1>
        </Link>
        <Nav />
      </div>
    );
  }
});

export default header;
