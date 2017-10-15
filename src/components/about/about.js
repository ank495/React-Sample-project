"use strict";

var React = require('react');

var About = React.createClass({
  statics:{
    willTransitionTo: function(transition, params, query, callback){
      if(!confirm('Alow')){
        transition.about();
      }else{
        callback();
      }
  },
  willTransitionFrom: function(transition, component){
    if(!confirm('Sure')){
      transition.about();
    }
  }
},
  render: function() {
    return (
       <div className="jumbotron">
        <h1>In about page</h1>
        </div>
    );
  }
});

module.exports = About;
