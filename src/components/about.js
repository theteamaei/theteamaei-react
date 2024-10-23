import React, { Component } from "react";
import { Link } from "react-router-dom";

class About extends Component {
  componentDidMount() {
    this.setDocumentTitle('TheTeamAei - About');
  }

  setDocumentTitle(title) {
    document.title = title;
  }

  render() {
    return (
      <div>
        <h1>About Page</h1>
        <br />
        <ul>
          <li>
            {/* Endpoint to route to Home component */}
            <Link to="/home">Home</Link>
          </li>
          <li>
            {/* Endpoint to route to About component */}
            <Link to="/">About</Link>
          </li>
          <li>
            {/* Endpoint to route to Vlog component */}
            <Link to="/vlog">Vlog</Link>
          </li>
        </ul>
      </div>
    );
  }
}
export default About;