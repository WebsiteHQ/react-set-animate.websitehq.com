import React, { PropTypes } from "react";

const Footer = React.createClass({
  render() {
    return (
      <div className="footer">
        <p>
          &copy; 2015-2018{" "}
          <a href="https://websitehq.com" target="blank">
            Peter W Moresi
          </a>
        </p>
      </div>
    );
  }
});

export default Footer;
