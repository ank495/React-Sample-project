"use strict";

var React = require('react');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var routes = (
<Route name="app" path="/" handler={require('./components/app')}>
 <DefaultRoute handler={require('./components/homePage')}/>
 <Route name="authorPage" handler={require('./components/authors/authorPage')}/>
 <Route name="about" handler={require('./components/about/about')}/>
 <Route name="manageAuthor" handler={require('./components/authors/manageAuthorPage')}/>
 <NotFoundRoute handler={require('./components/NotFound')}/>
 <Redirect from="about-us" to="about"/>
 <Redirect from="awthers" to="authorPage"/>
 <Redirect from="about/*" to="authorPage"/>
 </Route>
);

module.exports = routes;
