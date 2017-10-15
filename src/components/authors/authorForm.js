"use strict";

var React = require('react');
var Input = require('../common/textinput');


var AuthorForm = React.createClass({
proptypes:{
  author:React.PropTypes.object.isRequired,
  onSave:React.PropTypes.func.isRequired,
  onChange:React.PropTypes.func.isRequired,
  error:React.PropTypes.object
},

  render:function(){
    return(
      <div>
      <h1>Author Form</h1>
      <div>
      <Input
             name="firstName"
             label="First Name"
             value={this.props.author.firstName}
             onChange={this.props.onChange}
             error={this.props.errors.firstName}/><br/>
      <Input name="lastName" label="Last Name" value={this.props.author.lastName} onChange={this.props.onChange} error={this.props.errors.lastName}/><br/>
      <input type="submit" onClick={this.props.onSave} value="Save"/>
      </div>
      </div>
    );
  }
});


module.exports = AuthorForm;
