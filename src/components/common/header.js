"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
  render: function(){
    return(
 <nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">WebSiteName</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><Link to="app">Home</Link></li>
      <li><Link to="about">About</Link></li>
      <li><Link to="authorPage">Authors</Link></li>
      <li><Link to="manageAuthor">ManageAuthor</Link></li>
    </ul>
  </div>
</nav>
    );
  }
});

module.exports = Header;
