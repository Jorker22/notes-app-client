import React from "react";
import { Link } from "react-router";


export default function Header(props) {
  return (
    <div className="navbar navbar-default navbar-static-top" role="navigation">
    <div className="container">
      <div className="navbar-header">
        <a className="navbar-brand" href="#">formbuilder</a>
      </div>
      <div className="navbar-collapse collapse">
        <ul className="nav navbar-nav navbar-right">
          <li><Link to="/faq">FAQ</Link></li>
          <li><a href="http://localhost:3000/">Back to hompage</a></li>
        </ul>
      </div>
    </div>
  </div>);
}
