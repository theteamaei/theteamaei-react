import React, { Component } from "react";
import { Link } from "react-router-dom";

class Vlog extends Component {
  componentDidMount() {
    this.setDocumentTitle('TheTeamAei - Vlog');
  }

  setDocumentTitle(title) {
    document.title = title;
  }

  render() {
    return (
      <div>
        <h1>Vlog Page</h1>
        <br />
        <ul>
          <li>
            {/* Endpoint to route to Home component */}
            <Link to="/home">Home</Link>
          </li>
          <li>
            {/* Endpoint to route to About component */}
            <Link to="/about">About</Link>
          </li>
          <li>
            {/* Endpoint to route to Vlog component */}
            <Link to="/">Vlog</Link>
          </li>
        </ul>
      </div>
    );
  }
}
export default Vlog;