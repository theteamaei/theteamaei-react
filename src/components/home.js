import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  componentDidMount() {
    this.setDocumentTitle('TheTeamAei - Home');
  }

  setDocumentTitle(title) {
    document.title = title;
  }

  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <br />
        <ul>
          <li>
            {/* Endpoint to route to Home component */}
            <Link to="/">Home</Link>
          </li>
          <li>
            {/* Endpoint to route to About component */}
            <Link to="/about">About</Link>
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
export default Home;