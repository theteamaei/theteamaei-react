import React, { Component } from "react";
import { NavLink } from "react-router-dom";

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
        <div class="w3-top">
          <div class="w3-bar ta-purple w3-card">
            <NavLink to="/home" className="w3-bar-item w3-button w3-padding-large ta-logo">TheTeamAei</NavLink>
            <NavLink to="/about" className="w3-bar-item w3-button w3-padding-large w3-hide-small">About</NavLink>
            <NavLink to="/vlog" className="w3-bar-item w3-button w3-padding-large w3-hide-small">Vlog</NavLink>
            <NavLink to="https://www.facebook.com/TheTeamAei/" className="w3-right w3-bar-item w3-button ta-icon"><i class="fa fa-facebook-official"></i></NavLink>
            <NavLink to="https://www.instagram.com/theteamaei/" className="w3-right w3-bar-item w3-button ta-icon"><i class="fa fa-instagram"></i></NavLink>
            <NavLink to="https://www.youtube.com/TeamAei" className="w3-right w3-bar-item w3-button ta-icon"><i class="fa fa-youtube-play"></i></NavLink>
          </div>
        </div>
      
        <div class="w3-container ta-purple w3-margin-top ta-footer">
          <p class="w3-small">Powered By TeamAei &#169; Copyright 2020 of TeamAei All Rights Reserved.
          <span class="w3-small w3-right w3-bar-item w3-padding-small"><strong>build 2.0.3</strong></span></p>
        </div>
      </div>
    );
  }
}
export default About;