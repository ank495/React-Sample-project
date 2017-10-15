"use strict";

var React = require('react');
var Router = require('react-router');
var AuthorForm = require('./authorForm');
var AuthorApi = require('../../api/authorApi');
var Toastr  = require('toastr');


var ManageAuthor = React.createClass({
  mixins:[
    Router.Navigation
  ],

  getInitialState: function(){
    return{
      author:{id:'', firstName:'',lastName:''},
      error:{}
    };
  },

  setAuthorState: function(event){//key press
    var field = event.target.name;
    var value = event.target.value;
    this.state.author[field] = value;
    return this.setState({author:this.state.author});
  },

  authorFormIsValid: function(){
    var formIsValid = true;
    this.state.error={}//clear any previous erros.

    if(!this.state.author.firstName.length <3){
      this.state.error.firstName = "3 char min";
      formIsValid=false;
    }
    if(!this.state.author.lastName.length <3){
      this.state.error.lastName = "3 char min";
      formIsValid=false;
    }

    this.setState({errors: this.state.error});
    return formIsValid;
  },

  saveAuthor:function(event){
    event.preventDefault();

    if(!this.authorFormIsValid()){
      return;
    }
    AuthorApi.saveAuthor(this.state.author);
    Toastr.success('Author saved. ')
    this.transitionTo('authorPage');
  },

  render:function(){
    return(
        <div>
        <h1>In ManageAuthor Page</h1>
        <AuthorForm author={this.state.author}
                    onChange={this.setAuthorState}
                    onSave={this.saveAuthor}
                    errors={this.state.error}/>
        </div>
    );
  }
});


module.exports = ManageAuthor;
