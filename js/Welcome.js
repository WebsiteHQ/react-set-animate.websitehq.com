import React, { PropTypes } from "react";
import Markdown from "react-remarkable";
import branch from "formula/fn/branch";
import isEmail from "formula/fn/isemail";
import FontAwesome from "react-fontawesome";
import Modal from "react-modal";
import { Link } from "xander";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Welcome = React.createClass({
  render() {
    var loggedIn = false;

    return (
      <div>
        <Header />
        <div className="content">
          <h2>Animiate React.js state.</h2>
          <button
            type="button"
            className="secondary"
            onClick={() =>
              (window.location.href =
                "https://github.com/WebsiteHQ/react-set-animate")
            }
          >
            Check us out on github
          </button>
          <h2>Modifies the state in your component during the duration.</h2>
          <h3>
            <Link to="/easing">Easing Demo</Link>
          </h3>
          <p>
            Example that demonstrates eases functions support by the library.
          </p>
          <h3>
            <Link to="/tweencolor">Tween Colors</Link>
          </h3>
          <p>Example slides a box in from the top left.</p>
          <h3>
            <Link to="/slidein">Slide In</Link>
          </h3>
          <p>Example slides a box in from the top left.</p>
          <h3>
            <Link to="/slideout">Slide Out</Link>
          </h3>
          <p>Example slides a box out from the top left.</p>
          <h2>Install</h2>
          <Markdown>```npm install --save react-set-animate```</Markdown>
        </div>
        <Footer />
      </div>
    );
  }
});

export default Welcome;
